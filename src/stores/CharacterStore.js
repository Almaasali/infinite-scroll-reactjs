import { flow, types } from "mobx-state-tree";
import { CharacterModel } from "../models/CharacterModel";
import axios from "../config/axios";

export const CharacterStore = types
  .model("CharacterStore", {
    characters: types.array(CharacterModel),
    pageNumber: types.optional(types.number, 1),
    hasNext: types.optional(types.boolean, true),
    isFetching: types.optional(types.boolean, false),
    //   current character (Single character) to show it in character page
    character: types.maybeNull(CharacterModel, { id: 0 }),
  })
  .views((self) => ({
    get allCharacters() {
      return self.characters.slice();
    },
    get currentPage() {
      return self.pageNumber;
    },
    get hasNextUrl() {
      return self.hasNext;
    },
    get fetching() {
      return self.isFetching;
    },
    get currentCharacter() {
      return self.character;
    },
  }))
  .actions((self) => ({
    loadCharacters: flow(function* () {
      return yield axios
        .get(`/character?page=${self.currentPage}`)
        .then((response) => {
          const next = response.data.info.next;
          self.setHasNext(next !== null ? true : false);
          self.setCharachters(response.data.results);
        })
        .then(() => {
          self.setIsFetching(false);
        });
    }),
    loadCharacterById: flow(function* (characterId) {
      return yield axios.get(`/character/${characterId}`).then((response) => {
        //console.log("character by id", response.data);
        self.setCurrentCharacter(response.data);
      });
    }),
    setCharachters: (characters) => {
      self.characters = self.characters.concat(characters).slice();
    },
    setPage: (pageNumber) => {
      self.pageNumber = pageNumber;
      if (self.hasNextUrl) {
        self.loadCharacters();
      }
    },
    setHasNext: (value) => {
      self.hasNext = value;
    },
    setIsFetching: (value) => {
      self.isFetching = value;
    },
    setCurrentCharacter: (character) => {
      self.character = character;
    },
  }));

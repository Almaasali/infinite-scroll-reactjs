import { types } from "mobx-state-tree";
import { LocationModel } from "./LocationModel";

export const CharacterModel = types.model("CharacterModel", {
  id: types.identifierNumber,
  name: types.optional(types.string, ""),
  status: types.optional(types.string, ""),
  species: types.optional(types.string, ""),
  type: types.optional(types.string, ""),
  gender: types.optional(types.string, ""),
  origin: types.maybe(LocationModel),
  location: types.maybe(LocationModel),
  image: types.optional(types.string, ""),
  episode: types.optional(types.array(types.string), []),
  url: types.optional(types.string, ""),
  created: types.optional(types.string, ""),
});

import { configure } from "mobx";

import { CharacterStore } from "./CharacterStore";

configure({ useProxies: "never" });

const characterStore = CharacterStore.create();

export const store = {
  characterStore,
};

import { types } from "mobx-state-tree";

export const LocationModel = types.model("LocationModel", {
  name: types.optional(types.string, ""),
  url: types.optional(types.string, ""),
});

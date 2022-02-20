import { Giraffe } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(Giraffe, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};

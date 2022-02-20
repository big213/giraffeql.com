import { GiraffeSpecies } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(GiraffeSpecies, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};

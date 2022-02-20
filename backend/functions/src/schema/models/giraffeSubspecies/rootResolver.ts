import { GiraffeSubspecies } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(GiraffeSubspecies, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};

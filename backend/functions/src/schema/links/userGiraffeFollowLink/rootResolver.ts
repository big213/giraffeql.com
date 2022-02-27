import { UserGiraffeFollowLink } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(UserGiraffeFollowLink, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};

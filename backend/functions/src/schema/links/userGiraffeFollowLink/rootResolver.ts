import { UserGiraffeFollowLink } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: UserGiraffeFollowLink,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: ["get", "getMultiple"],
  }),
};

import { GiraffeSubspecies } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: GiraffeSubspecies,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: ["get", "getMultiple"],
  }),
};

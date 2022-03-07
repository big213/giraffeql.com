import { GiraffeSpecies } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: GiraffeSpecies,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: ["get", "getMultiple"],
  }),
};

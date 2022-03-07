import { Giraffe } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: Giraffe,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: ["get", "getMultiple"],
  }),
};

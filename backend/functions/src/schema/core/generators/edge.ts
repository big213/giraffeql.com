import { BaseService, NormalService } from "../services";

import * as Scalars from "../../scalars";
import { generateTypenameField } from "../helpers/typeDef";
import { atob } from "../helpers/shared";
import type { ObjectTypeDefinition } from "giraffeql";

export function generateEdgeTypeDef(
  service: NormalService,
  currentService: BaseService
): ObjectTypeDefinition {
  return <ObjectTypeDefinition>{
    name: currentService.typename,
    fields: {
      ...generateTypenameField(currentService),
      node: {
        type: service.typeDefLookup,
        allowNull: false,
        resolver: ({ data }) => {
          return data.item;
        },
      },
      cursor: {
        type: Scalars.string,
        allowNull: false,
        resolver: ({ data }) => {
          return atob(
            JSON.stringify({
              lastId: data.lastId,
              lastValues: data.lastValues,
            })
          );
        },
      },
    },
  };
}

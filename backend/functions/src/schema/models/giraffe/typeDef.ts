import {
  User,
  Giraffe,
  GiraffeSubspecies,
  UserGiraffeFollowLink,
} from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateStringField,
  generateTextField,
  generateTypenameField,
  generateJoinableField,
} from "../../core/helpers/typeDef";
import { knex } from "../../../utils/knex";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: Giraffe.typename,
  description: "Giraffe type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(Giraffe),
    subspecies: generateJoinableField({
      service: GiraffeSubspecies,
      allowNull: false,
    }),
    name: generateStringField({ allowNull: false }),
    avatar: generateStringField({ allowNull: true }),
    description: generateTextField({
      allowNull: true,
    }),
    // foreign sql field
    currentUserFollowLink: {
      type: UserGiraffeFollowLink.typeDefLookup,
      allowNull: true,
      sqlOptions: {
        joinType: UserGiraffeFollowLink.typename,
        specialJoin: {
          field: "id",
          foreignTable: UserGiraffeFollowLink.typename,
          joinFunction: (
            knexObject,
            parentTableAlias,
            joinTableAlias,
            specialParams
          ) => {
            knexObject.leftJoin(
              {
                [joinTableAlias]: UserGiraffeFollowLink.typename,
              },
              (builder) => {
                builder
                  .on(parentTableAlias + ".id", "=", joinTableAlias + ".target")
                  .andOn(
                    specialParams.currentUserId
                      ? knex.raw(`"${joinTableAlias}".user = ?`, [
                          specialParams.currentUserId,
                        ])
                      : knex.raw("false")
                  );
              }
            );
          },
        },
      },
    },
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});

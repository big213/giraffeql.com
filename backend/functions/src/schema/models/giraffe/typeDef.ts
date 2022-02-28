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
  generateCurrentUserFollowLinkField,
} from "../../core/helpers/typeDef";

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
    currentUserFollowLink: generateCurrentUserFollowLinkField(
      UserGiraffeFollowLink
    ),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});

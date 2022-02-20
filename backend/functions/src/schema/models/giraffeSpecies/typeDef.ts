import { User, GiraffeSpecies } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateStringField,
  generateTextField,
  generateTypenameField,
} from "../../core/helpers/typeDef";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: GiraffeSpecies.typename,
  description: "GiraffeSpecies type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(GiraffeSpecies),
    name: generateStringField({ allowNull: false }),
    scientificName: generateStringField({
      allowNull: false,
      sqlOptions: { field: "scientific_name" },
    }),
    avatar: generateStringField({ allowNull: true }),
    description: generateTextField({
      allowNull: true,
    }),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});

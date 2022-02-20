import { User, GiraffeSubspecies, GiraffeSpecies } from "../../services";
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

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: GiraffeSubspecies.typename,
  description: "GiraffeSubspecies type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(GiraffeSubspecies),
    species: generateJoinableField({
      service: GiraffeSpecies,
      allowNull: false,
    }),
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

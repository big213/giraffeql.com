import { AccessControlMap } from "../../../types";
import { PaginatedService } from "../../core/services";

export class GiraffeSpeciesService extends PaginatedService {
  defaultTypename = "giraffeSpecies";

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };
}

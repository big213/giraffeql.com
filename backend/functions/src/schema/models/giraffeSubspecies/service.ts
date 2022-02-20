import { AccessControlMap } from "../../../types";
import { PaginatedService } from "../../core/services";

export class GiraffeSubspeciesService extends PaginatedService {
  defaultTypename = "giraffeSubspecies";

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
    "species.id": {},
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

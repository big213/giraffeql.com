import { AccessControlMap } from "../../../types";
import { PaginatedService } from "../../core/services";
import { isCurrentUser } from "../../helpers/permissions";

export class GiraffeService extends PaginatedService {
  defaultTypename = "giraffe";

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
    "subspecies.id": {},
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
    create: () => true,

    /*
    Allow if:
    - createdBy.id is currentUser
    */
    update: async ({ req, args, fieldPath }) => {
      const record = await this.lookupRecord(["createdBy.id"], args, fieldPath);
      if (isCurrentUser(req, record["createdBy.id"])) {
        return true;
      }

      return false;
    },

    /*
    Allow if:
    - createdBy.id is currentUser
    */
    delete: async ({ req, args, fieldPath }) => {
      const record = await this.lookupRecord(["createdBy.id"], args, fieldPath);
      if (isCurrentUser(req, record["createdBy.id"])) {
        return true;
      }

      return false;
    },
  };
}

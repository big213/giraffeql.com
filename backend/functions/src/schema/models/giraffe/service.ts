import { AccessControlMap, ServiceFunctionInputs } from "../../../types";
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
      const record = await this.getFirstSqlRecord(
        {
          select: ["createdBy.id"],
          where: args,
        },
        fieldPath
      );
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
      const record = await this.getFirstSqlRecord(
        {
          select: ["createdBy.id"],
          where: args,
        },
        fieldPath
      );
      if (isCurrentUser(req, record["createdBy.id"])) {
        return true;
      }

      return false;
    },
  };

  async getSpecialParams({ req }: ServiceFunctionInputs) {
    return {
      currentUserId: req.user?.id ?? null,
    };
  }
}

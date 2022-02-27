import { userRoleKenum } from "./enums";
import { KenumService } from "./core/services";

import { UserService } from "./models/user/service";
import { ApiKeyService } from "./models/apiKey/service";
import { GithubService } from "./models/github/service";
import { FileService } from "./models/file/service";
import { AdminService } from "./models/admin/service";
import { GiraffeSpeciesService } from "./models/giraffeSpecies/service";
import { GiraffeSubspeciesService } from "./models/giraffeSubspecies/service";
import { GiraffeService } from "./models/giraffe/service";
/** END Service Import */

import { UserUserFollowLinkService } from "./links/userUserFollowLink/service"
import { UserGiraffeFollowLinkService } from "./links/userGiraffeFollowLink/service"
/** END LINK Service Import */

export const User = new UserService();
export const ApiKey = new ApiKeyService();
export const File = new FileService();
export const Github = new GithubService();
export const Admin = new AdminService();
export const GiraffeSpecies = new GiraffeSpeciesService();
export const GiraffeSubspecies = new GiraffeSubspeciesService();
export const Giraffe = new GiraffeService();
/** END Service Set */

export const UserUserFollowLink = new UserUserFollowLinkService();
export const UserGiraffeFollowLink = new UserGiraffeFollowLinkService();
/** END LINK Service Set */

export const UserRole = new KenumService("userRole", userRoleKenum);

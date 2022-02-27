import * as allServices from "./services";
import "./scalars"; // initialize scalars
export * as Scalars from "./scalars";

import user from "./models/user/typeDef";
import apiKey from "./models/apiKey/typeDef";
import file from "./models/file/typeDef";
import giraffeSpecies from "./models/giraffeSpecies/typeDef";
import giraffeSubspecies from "./models/giraffeSubspecies/typeDef";
import giraffe from "./models/giraffe/typeDef";
/** END TypeDef Import */

import userUserFollowLink from "./links/userUserFollowLink/typeDef"
import userGiraffeFollowLink from "./links/userGiraffeFollowLink/typeDef"
/** END LINK TypeDef Import */

// add the objectTypeDefs for the services with objectTypeDefs
allServices.User.setTypeDef(user);
allServices.ApiKey.setTypeDef(apiKey);
allServices.File.setTypeDef(file);
allServices.GiraffeSpecies.setTypeDef(giraffeSpecies);
allServices.GiraffeSubspecies.setTypeDef(giraffeSubspecies);
allServices.Giraffe.setTypeDef(giraffe);
/** END TypeDef Set */

allServices.UserUserFollowLink.setTypeDef(userUserFollowLink)
allServices.UserGiraffeFollowLink.setTypeDef(userGiraffeFollowLink)
/** END LINK TypeDef Set */

import User from "./models/user/rootResolver";
import ApiKey from "./models/apiKey/rootResolver";
import Github from "./models/github/rootResolver";
import File from "./models/file/rootResolver";
import Admin from "./models/admin/rootResolver";
import GiraffeSpecies from "./models/giraffeSpecies/rootResolver";
import GiraffeSubspecies from "./models/giraffeSubspecies/rootResolver";
import Giraffe from "./models/giraffe/rootResolver";
/** END RootResolver Import */

import UserUserFollowLink from "./links/userUserFollowLink/rootResolver"
import UserGiraffeFollowLink from "./links/userGiraffeFollowLink/rootResolver"
/** END LINK RootResolver Import */

allServices.User.setRootResolvers(User);
allServices.ApiKey.setRootResolvers(ApiKey);
allServices.Github.setRootResolvers(Github);
allServices.File.setRootResolvers(File);
allServices.Admin.setRootResolvers(Admin);
allServices.GiraffeSpecies.setRootResolvers(GiraffeSpecies);
allServices.GiraffeSubspecies.setRootResolvers(GiraffeSubspecies);
allServices.Giraffe.setRootResolvers(Giraffe);
/** END RootResolver Set */

allServices.UserUserFollowLink.setRootResolvers(UserUserFollowLink);
allServices.UserGiraffeFollowLink.setRootResolvers(UserGiraffeFollowLink);
/** END LINK RootResolver Set */

import { UserGiraffeFollowLink, User, Giraffe } from "../../services";
import { GiraffeqlObjectType } from "giraffeql";
import { generateLinkTypeDef } from "../../core/generators";

export default new GiraffeqlObjectType(
  generateLinkTypeDef(
    {
      user: {
        service: User,
        allowNull: false,
      },
      target: {
        service: Giraffe,
        allowNull: false,
      },
    },
    UserGiraffeFollowLink,
    {}
  )
);

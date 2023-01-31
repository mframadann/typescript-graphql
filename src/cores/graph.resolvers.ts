import { UsersResolvers } from "../graphs";
import { ProfileResolvers } from "../graphs";

export default {
  ...UsersResolvers,
  ...ProfileResolvers,
};

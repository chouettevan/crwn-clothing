import { USER_ACTION_TYPES } from "./user.types";
import createAction from "../../Utils/Reducer/reducer";

export const setCurrentUser = user => createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);

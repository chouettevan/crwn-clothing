import { USER_ACTION_TYPES } from "./user.types";
import { createAction,withMatcher,ActionWithPayload } from "../../Utils/Reducer/reducer";
import {User} from 'firebase/auth';


export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER,User | null>

export const setCurrentUser = withMatcher(
	(user:User | null):SetCurrentUser => 
		createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user)
);

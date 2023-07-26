import { setCurrentUser } from './user.actions';
import {AnyAction} from 'redux';
import {User} from 'firebase/auth';


export type UserState = {
    readonly currentUser:User| null
} 
const USER_INITIAL_STATE:UserState = {
    currentUser:null,
}


export const userReducer = 
    (state=USER_INITIAL_STATE,action:AnyAction):UserState => {
        if (setCurrentUser.match(action)) {
            return {...state,currentUser:action.payload};
        }
        return state; 
    };
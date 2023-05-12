import { USER_ACTION_TYPES } from './user.types'
export const userReducer = (state={currentUser:null},action) => {
    const { type,payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state,currentUser:payload };
        default:
            return state;
    }
};
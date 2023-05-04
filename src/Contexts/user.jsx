import { createContext,useEffect,useReducer } from "react";
import { authStateChangeListener } from "../Utils/Firebase/firebase";
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null,
});
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER:'SET_CURRENT_USER'
};
const userReducer = (state,action) => {
    const { type,payload } = action;
    switch (type) {
        case "SET_CURRENT_USER":
            return { currentUser:payload };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

export const UserProvider = ({ children }) => {
    const [ { currentUser },dipatch ] = useReducer(userReducer,{ currentUser:null })
    const setCurrentUser  = user => {
        dipatch({ type:USER_ACTION_TYPES.SET_CURRENT_USER,payload:user })
    }
    const value = { currentUser,setCurrentUser }; 
    useEffect(() => {
        const Unsubscribe = authStateChangeListener(user => setCurrentUser(user))
        return Unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
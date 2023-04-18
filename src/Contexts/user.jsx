import { createContext,useState,useEffect } from "react";
import { authStateChangeListener } from "../utillities/Firebase/firebase";
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:() => null,
});
export const UserProvider = ({ children }) => {
    const [ currentUser,setCurrentUser ] = useState(null);
    const value = { currentUser,setCurrentUser }; 
    useEffect(() => {
        const Unsubscribe = authStateChangeListener(user => setCurrentUser(user))
        return Unsubscribe;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
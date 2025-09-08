import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null)
   const [loading, setLoding] = useState(true)


   useEffect(() => {
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoding(false)
     })

     return () => unsubscribe();
   }, []);


   return (
    <UserContext.Provider value={{user, setUser}}>
      {!loading && children}
    </UserContext.Provider>  
   )
}
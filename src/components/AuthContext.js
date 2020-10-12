import React, {createContext, useState, useEffect} from 'react'
import {auth, provider} from '../firebase/config'

//CREATE A NEW CONTEXT
export const AuthContext = createContext()

//CREATE A PROVADER THAT WILL RECEIVE A CHILDER (ALL THE COMPONENTS WRAPPED BY THE PROVIDER) AND IT WILL RETURN A CONTEXT WITH THE USER'S VALUE
export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        //SET-UP LISTENNER FOR USER'S CHANGES
        auth.onAuthStateChanged(setUser)
    }, [])

    return(
        <AuthContext.Provider 
            value={{user}}>
                {children}
        </AuthContext.Provider>
    )
}

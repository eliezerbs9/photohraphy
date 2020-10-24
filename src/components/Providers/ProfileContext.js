import React, {createContext, useState, useEffect} from 'react'

//CREATE A NEW CONTEXT
export const ProfileContext = createContext()

//CREATE A PROVADER THAT WILL RECEIVE A CHILDER (ALL THE COMPONENTS WRAPPED BY THE PROVIDER) AND IT WILL RETURN A CONTEXT WITH THE USER'S VALUE
export const ProfileProvider = ({children}) => {

    const [profile, setProfile] = useState({
        photo: "",
        name: "",
        location: "",
        birth_date: "",
        about_me: ""
    })

    const [edit, setEdit] = useState(false)

    return(
        <ProfileContext.Provider 
            value={{profile, setProfile, edit, setEdit}}>
                {children}
        </ProfileContext.Provider>
    )
}

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

    useEffect(() => {
        console.log('INSIDE useEffect on Profile Context: ')
        console.log(profile)
    }, [profile, setProfile])

    return(
        <ProfileContext.Provider 
            value={{profile, setProfile}}>
                {children}
        </ProfileContext.Provider>
    )
}

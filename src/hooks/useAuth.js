import {useState, useEffect} from 'react'
import {projectAuth} from '../firebase/config'

const useAuth = () => {
    const login = (email, password) => {
        return projectAuth.signInWithEmailAndPassword(email, password);
    }
    
    const loggout = () => {
        return projectAuth.signOut()
    }
    
    const register = async (name, email, password) => {
        await projectAuth.createUserWithEmailAndPassword(email, password)
        return projectAuth.currentUser.updateProfile({
            displayName: name
        })
    }
}

export default useAuth;


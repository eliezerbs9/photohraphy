import {useState, useEffect} from 'react'
import {projectAuth} from '../firebase/config'

const useAuthStatus =  () => {
    const [isLoggedIn, setIsLogeedIn] = useState(false);

    useEffect(() => {
        projectAuth.onAuthStateChanged((user) => {
            if(user){
                console.log('user  logged in')
                setIsLogeedIn(true)
            }else{
                console.log('user  logged out')
            }
        })
        
    }, [isLoggedIn])

        return {isLoggedIn}
}

export default useAuthStatus
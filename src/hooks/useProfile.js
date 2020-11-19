import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useProfile = (user) => {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const profileRef = firestore.collection('profile').doc(user.uid)

        const unsub =  profileRef.onSnapshot((doc) => {
                if(doc.exists){
                    console.log('usePRofile hook ',doc)
                    setProfile(doc.data())
                }else{
                    console.log('Profile not found')
                    setProfile(null)
                }
            })
            return () => unsub()
    }, [user])

    return {profile}
}

export default useProfile

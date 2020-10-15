import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useProfile = (uid) => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const unsub = firestore.collection('profile').doc(uid).get()
            .then((profile) => {
                if(profile.exists){
                    setProfile(profile.data())
                }else{
                    console.log('Profile not found')
                    setProfile(null)
                }
            }).catch((error) => {
                console.log('Error getting document: '+error)
            })
    }, [uid])

    return {profile}
}

export default useProfile

import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useProfile = (uid) => {
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const profileRef = firestore.collection('profile').doc(uid)

        const unsub =  profileRef.onSnapshot((doc) => {
                if(doc){
                    console.log(doc.data())
                    setProfile(doc.data())
                }else{
                    console.log('Profile not found')
                    setProfile(null)
                }
            })
            return () => unsub()
    }, [uid])

    return {profile}
}

export default useProfile

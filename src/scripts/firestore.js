import {firestore} from '../firebase/config'

export const updateProfile = async (uid, data) => {
    let docRef = firestore.collection('profile').doc(uid)
        docRef.set(data)
            .then(() => {
                console.log('Profile updated')
            })
            .catch((error) => {
                console.error("Error: ", error)
            })

}
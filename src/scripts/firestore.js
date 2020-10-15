import {firestore} from '../firebase/config'

export const getProfile = async (uid) => {
    let docRef = firestore.collection('profile').doc(uid)
    docRef.get().then((doc) => {
        if(doc.exists){
            return doc.data()
        }else{
            console.log('no doc')
        }
    }).catch((error) => {
        console.log('Error getting document: '+error)
    })
}
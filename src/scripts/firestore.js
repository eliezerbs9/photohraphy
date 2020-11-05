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

export const createAlbum = async (uid, data) => {
    let docRef = firestore.collection('albums').doc(uid)
        docRef.set({
            ...data,
            photographerId: uid,
            createdAt: new Date().toLocaleString(),
            photos: []
        })
}

export const updateAlbum = async (uid, data) => {
    let docRef = firestore.collection('albums').doc(uid)
        docRef.set(data)
            .then(() => {
                console.log('Album updated')
            }).catch(error => {
                console.error('Error: ', error)
            })
}
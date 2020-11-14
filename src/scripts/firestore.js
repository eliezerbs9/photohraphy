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
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums')
        docRef.add({
            ...data,
            photographerId: uid,
            createdAt: new Date().toLocaleString(),
        })
        .then((result) => {
            console.log('Album created')
            return result
        })
        .catch(error => {
            console.log('Error creating the album', error)
        })
}

export const updateAlbum = async (uid, album_id, data) => {
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)
        docRef.set(data)
            .then(() => {
                console.log('Album updated')
            }).catch(error => {
                console.error('Error: ', error)
            })
}

export const addPhoto = async =(uid, album_id) => {
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)

}

export const getAlbum = async (uid, album_id) => {
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)
        docRef.get()
            .then((doc) => {
                if(doc.exists){
                    return doc.data()
                }
                else{
                    console.log('nothing found')
                }
            }).catch(error => {
                console.error('Error: ', error)
            })
}
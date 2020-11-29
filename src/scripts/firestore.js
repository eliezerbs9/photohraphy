import {firestore, storage} from '../firebase/config'

export const deletePhoto = async (uid, album_id ,photo) => {
    try{
        console.log('data being passed to firestore method uid: ', uid)
        console.log('data being passed to firestore method album_id: ', album_id)
        console.log('data being passed to firestore method photo.id: ', photo.id)

        let docRef =  firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id).collection('photos').doc(photo.id)
        let storageRef = storage.ref(photo.name)
        await docRef.delete()
        await storageRef.delete()
        console.log('photo deleted')
    }catch(error){
        console.log('Error deleting photo: ',error)
    }
}

export const createProfile = async (uid, data) => {
    let docRef = firestore.collection('profile').doc(uid)
    try{
        await docRef.set(data)
    }catch(err){
        console.log('Error: ', err)
    }
}

export const updateProfile = async (uid, data) => {
    let docRef = firestore.collection('profile').doc(uid)
    console.log('Updating profile: ', uid)
    console.log('new data: ',data)
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
    console.log('UPDATE ALBUM: ', album_id)
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)
        docRef.set(data)
            .then(() => {
                console.log('Album updated')
            }).catch(error => {
                console.error('Error: ', error)
            })
}

export const addPhoto = async (uid, album, data) => {
    console.log('data passed: ', data)
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album.id).collection('photos')
    try{
        await docRef.add(data)
        console.log('docRef: ', docRef.id)
    }catch(error){
        console.error('Error: ',error)
    }
}

export const getAlbum = async (uid, album_id) => {
    let docRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id).listCollections()
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
import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const usePhotos = (uid, album_id) => {
    const [photos, setPhotos] = useState(null)
    console.log('uid: ', uid)

    useEffect(() => {
        const photoRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id).collection('photos')

        const unsub =  photoRef.onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setPhotos(documents)
            })
            return () => unsub()
    }, [uid, album_id])

    return {photos}
}

export default usePhotos
import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useAlbum = (uid, album_id) => {
    const [album, setAlbum] = useState(null)

    useEffect(() => {
        const albumRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)

        const unsub =  albumRef.get().then((doc) => {
            if(doc.exists){
                console.log('Album: ', doc.data())
                setAlbum(doc.data())
            }else{
                console.log('No album was found')
            }
        })
            return () => unsub()
    }, [uid, album_id])

    return {album}
}

export default useAlbum
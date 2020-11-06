import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useAlbums = (uid) => {
    const [albums, setAlbums] = useState(null)

    useEffect(() => {
        const albumRef = firestore.collection('albums').doc(uid).collection('myAlbums')

        const unsub =  albumRef.onSnapshot((snap) => {
                let documents = []
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setAlbums(documents)
            })
            return () => unsub()
    }, [uid])

    return {albums}
}

export default useAlbums
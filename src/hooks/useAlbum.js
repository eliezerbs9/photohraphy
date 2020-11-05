import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useAlbum = (uid) => {
    const [album, setAlbum] = useState(null)

    useEffect(() => {
        const albumRef = firestore.collection('albums').doc(uid)

        const unsub =  albumRef.onSnapshot((doc) => {
                if(doc){
                    console.log(doc.data())
                    setAlbum(doc.data())
                }else{
                    console.log('Album not found')
                    setAlbum(null)
                }
            })
            return () => unsub()
    }, [uid])

    return {album}
}
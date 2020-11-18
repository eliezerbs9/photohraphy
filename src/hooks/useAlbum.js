import {useState, useEffect} from 'react'
import {firestore} from '../firebase/config'

const useAlbum = (uid, album_id) => {
    const [album, setAlbum] = useState(null)

    useEffect(() => {
        const albumRef = firestore.collection('albums').doc(uid).collection('myAlbums').doc(album_id)

        const getAlbum = async () => {
            try{
                let album = await albumRef.get()
                if(album){
                    setAlbum({...album.data(), id: album.id})
                }
            }catch(err){
                console.error('Error: ', err)
    
            }
        }

        getAlbum()


    }, [uid, album_id])

    return {album}
}

export default useAlbum
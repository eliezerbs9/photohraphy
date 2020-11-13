import React, {useState ,useEffect} from 'react'
import useAlbum from '../../hooks/useAlbum'
import AddPhotoModal from '../Photos/AddPhotoModal'
import {useRouteMatch} from 'react-router-dom'

const Album = ({user}) => {

    const {params} = useRouteMatch()
    const {album} = useAlbum(user.uid, params.id)
    const [showModal, setShowModal] = useState(false)

    

    useEffect(() => {
       console.log('Album component', album)
    }, [album, user])

    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal}/>
            {album && (
                <div className="content_inner">
                    <a 
                        className="btn btn--primary"
                        onClick={() => {
                            setShowModal(true)
                            console.log('add photo modal')
                        }}
                    >AddPhoto</a>
                    <div className="album_info">
                        <p>{album.id}</p>
                        <p>{album.name}</p>
                        <p>{album.albumDate}</p>
                        <p>{album.createdAt}</p>
                    </div>
                    <div className="photo_grid">
                        
                    </div>
                </div>
            )}
            {!album && (
                <p>Loading</p>
            )}
        </>
     
    )
}

export default Album
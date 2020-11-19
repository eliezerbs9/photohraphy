import React, {useState ,useEffect, useContext} from 'react'
import {AuthContext} from '../Providers/AuthContext'
import useAlbum from '../../hooks/useAlbum'
import AddPhotoModal from '../Photos/AddPhotoModal'
import PhotoGrid from '../Photos/PhotoGrid'
import {useRouteMatch} from 'react-router-dom'

const Album = () => {

    const {user} = useContext(AuthContext)
    const {params} = useRouteMatch()
    const {album} = useAlbum(user.uid, params.id)
    const [showModal, setShowModal] = useState(false)

    

    useEffect(() => {
       console.log('Album component', album)
    }, [album, user])

    return (
        <>
            {album && (
            <>
                <AddPhotoModal visible={showModal} setVisible={setShowModal} album={album}/>
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
                    <PhotoGrid album_id={album.id} user_id={user.id} />
               
                </div>
            </>

            )}
            {!album && (
                <p>Loading</p>
            )}
        </>
     
    )
}

export default Album
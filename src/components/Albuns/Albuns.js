import React, {useState} from 'react'
import AddPhotoModal from '../Photos/AddPhotoModal'
import useAlbums from '../../hooks/useAlbums'

const Albuns = () => {

    const [showModal, setShowModal] = useState(false)

    const {albums} = useAlbums('UiLt3FYVBLT48HDHEGX7XIlQsi82')

    console.log(albums)

    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal}/>
            <div className="albuns">
                        <a 
                            className="btn btn--primary"
                            onClick={() => {
                                console.log('add photo modal')
                                setShowModal(true)
                            }}
                            >Add Photo</a>
                        <div className="albuns_grid">
                            {albums && (
                                <>
                                    {albums.map(album => {
                                        return (
                                            <h1>{album.name}</h1>
                                        )
                                    })}
                                </>
                            )}                    
                        </div>
            </div>
        </>
    )
}

export default Albuns
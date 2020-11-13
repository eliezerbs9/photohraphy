import React, {useContext, useState} from 'react'
import AddAlbumModal from '../Albuns/AddAlbumModal'
import AlbumsGrid from './AlbumsGrid'
import {AuthContext} from '../Providers/AuthContext'


const Albums = () => {

    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(AuthContext)


    return (
        <>
            <AddAlbumModal visible={showModal} setVisible={setShowModal} user={user}/>
            <div className="content_inner">
                <a 
                    className="btn btn--primary"
                    onClick={() => {
                        console.log('add albunm modal')
                        setShowModal(true)
                    }}
                >Add Album</a>
                <AlbumsGrid user={user} />
            </div>
        </>
    )
}

export default Albums
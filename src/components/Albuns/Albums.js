import React, {useContext, useState} from 'react'
import AddPhotoModal from '../Photos/AddPhotoModal'
import AlbumsGrid from './AlbumsGrid'
import {AuthContext} from '../Providers/AuthContext'


const Albums = () => {

    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(AuthContext)


    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal} user={user}/>
            <div className="albums">
                <a 
                    className="btn btn--primary"
                    onClick={() => {
                        console.log('add photo modal')
                        setShowModal(true)
                    }}
                    >Add Album</a>
                    <AlbumsGrid user={user} />
            </div>
        </>
    )
}

export default Albums
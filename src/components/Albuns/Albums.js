import React, {useContext ,useState} from 'react'
import AddPhotoModal from '../Photos/AddPhotoModal'
import {AuthContext} from '../Providers/AuthContext'
import AlbumsGrid from './AlbumsGrid'


const Albums = () => {

    const [showModal, setShowModal] = useState(false)
    const {user} = useContext(AuthContext)

    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal} user={user}/>
            <div className="albuns">
                <a 
                    className="btn btn--primary"
                    onClick={() => {
                        console.log('add photo modal')
                        setShowModal(true)
                    }}
                    >Add Photo</a>
                    <AlbumsGrid user={user}/>
            </div>
        </>
    )
}

export default Albums
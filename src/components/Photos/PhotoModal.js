import React, {useContext} from 'react'
import Modal from '../Layout/Modal'
import {deletePhoto} from '../../scripts/firestore'
import {AuthContext} from '../Providers/AuthContext'

const PhotoModal = ({visible, setVisible, photo, album_id}) => {

    const {user} = useContext(AuthContext)

    return (
        <>
            {photo && (
                <Modal visible={visible} setVisible={setVisible}>
                    <div className="photo_modal">
                        <img className="photo_modal_img" src={photo.url} alt={photo.name}></img>
                        <div className="photo_modal_opt">
                            <button 
                                className="btn btn--lg btn--danger"
                                onClick={() => {
                                    deletePhoto(user.uid, album_id, photo )
                                }}    
                            >Delete</button>
                            <button className="btn btn--lg btn--success">Cover</button>
                        </div>
                    </div>
                </Modal>
            )}
            {!photo && (
                <p>No photo to show</p>
            )}
        </>
    )
}

export default PhotoModal
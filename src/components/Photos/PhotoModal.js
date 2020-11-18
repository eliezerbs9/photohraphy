import React from 'react'
import Modal from '../Layout/Modal'

const PhotoModal = ({visible, setVisible, photo}) => {
    return (
        <>
            {photo && (
                <Modal visible={visible} setVisible={setVisible}>
                    <div className="photo_modal">
                        <img className="photo_modal_img" src={photo.url} alt={photo.name}></img>
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
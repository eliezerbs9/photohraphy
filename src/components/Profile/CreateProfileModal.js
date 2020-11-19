import React from 'react'
import Modal from '../Layout/Modal'

const CreateProfileModal = ({visible, setVisible}) => {
    return (
        <>
            <Modal visible={visible} setVisible={setVisible}>
                <div>
                    <p>Create PRofile Modal</p>
                </div>
            </Modal>
        </>
    )
}

export default CreateProfileModal
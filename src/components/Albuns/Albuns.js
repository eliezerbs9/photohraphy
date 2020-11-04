import React, {useState} from 'react'
import AddPhotoModal from '../Photos/AddPhotoModal'

const Albuns = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <AddPhotoModal visible={showModal} setVisible={setShowModal}/>
            <section className="albuns">
                        <a 
                            className="btn btn--primary"
                            onClick={() => {
                                console.log('add photo modal')
                                setShowModal(true)
                            }}
                            >Add Photo</a>
                        <div className="albuns_grid">
                            
                        </div>
            </section>
        </>
    )
}

export default Albuns
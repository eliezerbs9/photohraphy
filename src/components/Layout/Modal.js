import React from 'react'

const Modal = ({children, visible, setVisible}) => {

    const modal = document.getElementById('backdrop');

    const closeModal = (e) => {
        if(e.target.classList.contains('backdrop')){
            setVisible(false);
        }
    }

    return (
        <div 
            id="backdrop"
            className={`backdrop${visible ? ' backdrop--active' : ''}`}
            onClick={closeModal}
            >
            <div className={`modal_box `}>
                {children}
            </div>
        </div>
    )
}

export default Modal
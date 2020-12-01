import React from 'react'

const Modal = ({children, visible, setVisible, closeCallback}) => {

    const modal = document.getElementById('backdrop');

    const closeModal = (e) => {
        if(e.target.classList.contains('backdrop')){
            console.log('closeModal')
            setVisible(false);
            if(closeCallback){
                closeCallback()
            }
        }
    }

    const closeStyle = {
        cursor: 'pointer',
        color: 'var(--primary)',
        fontWeight: '900',
        right: '10px',
        position: 'absolute'
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
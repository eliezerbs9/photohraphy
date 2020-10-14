import React from 'react'

const EditProfile = () => {
    return (
        <div 
            className="edit_profile" 
            id="edit_profile"
            onClick={(e) => {
                let modal = document.getElementById('edit_profile');
                if(e.target.classList.contains('edit_profile')){
                    modal.style.display = "none"
                }
            }}>
            <div className="edit_profile__box">

            </div>
        </div>
    )
}

export default EditProfile
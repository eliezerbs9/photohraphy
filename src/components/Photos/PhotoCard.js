import React from 'react'

const PhotoCard = ({photo}) => {

    return (
        <>
        <div className="photo_card">
            <img className="photo_card_img" src={photo.url} alt={photo.name}/>
            <p className="photo_card_name">{photo.name}</p>
        </div>
        
        </>
    )
}

export default PhotoCard
import React from 'react'

const AlbumCard = ({album}) => {

    return (
        <>
            <div className="album_card">
                <input type="checkbox"/> 
                <img className="album_card_image" src="" alt=""/>
                <h1 className="album_card_header">{album.name}</h1> 
                <p className="album_card_date">Created at {album.createdAt}</p>   
            </div>
        </>
    )
}

export default AlbumCard
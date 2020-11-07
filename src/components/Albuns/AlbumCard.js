import React from 'react'
import {Link} from "react-router-dom";

const AlbumCard = ({album}) => {

    return (
        <>
        <Link 
            to={`/album/${album.id}`}>
            <div className="album_card">
                <img className="album_card_image" src="" alt=""/>
                <h1 className="album_card_header">{album.name}</h1> 
                <p className="album_card_date">Created at {album.createdAt}</p>   
            </div>
        </Link>  
        </>
    )
}

export default AlbumCard
import React from 'react'

const Album = ({album}) => {

    return (
        <>
            <div className="album">
                <img className="album_image" src="" alt=""/>
                <h1 className="album_header">{album.name}</h1> 
                <p className="album_date">Created at {album.createdAt}</p>   
            </div>
        </>
    )
}

export default Album
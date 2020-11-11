import React, {useState, useEffect} from 'react'
import {getAlbum} from '../../scripts/firestore'
import useAlbum from '../../hooks/useAlbum'

const Album = ({user, album_id}) => {

    const {album} = useAlbum(user.uid, album_id)

    useEffect(() => {
       console.log('Album component', album)
    }, [album])

    return (
        <>
            {album && (
                <div className="album">
                    <p>{album.name}</p>
                </div>
            )}
            {!album && (
                <p>No Album</p>
            )}
        </>
     
    )
}

export default Album
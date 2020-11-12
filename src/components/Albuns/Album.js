import React, {useContext, useEffect} from 'react'
import useAlbum from '../../hooks/useAlbum'
import {useRouteMatch} from 'react-router-dom'

const Album = ({user}) => {

    const {params} = useRouteMatch()
    const {album} = useAlbum(user.uid, params.id)

    useEffect(() => {
       console.log('Album component', album)
    }, [album, user])

    return (
        <>
            {album && (
                <div className="album">
                    <p>{album.name}</p>
                </div>
            )}
            {!album && (
                <p>Loading</p>
            )}
        </>
     
    )
}

export default Album
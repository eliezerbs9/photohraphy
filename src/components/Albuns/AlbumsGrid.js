import React from 'react'
import AlbumCard from './AlbumCard'
import useAlbums from '../../hooks/useAlbums'
import {Link, useRouteMatch} from 'react-router-dom'


const AlbumsGrid = ({user}) => {
    
    const {albums} = useAlbums(user.uid)
    const {url} = useRouteMatch()

    return(
        <>
            {albums && (
                <div className="albums_grid">
                    {albums.map(album => {
                        return (
                            <Link to={`${url}album/${album.id}`}  key={album.id}>
                                 <AlbumCard album={album} />
                            </Link>
                        )
                    })}
                </div>
            )}               
        </>   
    )
   
}

export default AlbumsGrid
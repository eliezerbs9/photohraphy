import React from 'react'
import Profile from './Profile//Profile'
import Navbar from './Navbar'
import Albums from './Albuns/Albums'
import {BrowserRouter as Router ,Route ,Switch, useRouteMatch} from "react-router-dom";
import Album from './Albuns/Album'




const Home = ({user}) => {

    const {url, path} = useRouteMatch()

    return (
        <main className="home">
            <Navbar />
            <div className="content">
                <Profile />
                <Route path={`/album/:id`} exact render={(props) => <Album user={user}/>}/>
                <Route path={`${path}`} exact component={Albums} />
            </div>
        </main>
    )
}

export default Home
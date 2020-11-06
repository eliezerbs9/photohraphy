import React from 'react'
import Profile from './Profile//Profile'
import Navbar from './Navbar'
import Albums from './Albuns/Albums'


const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <div className="content">
                <Profile />
                <Albums />
            </div>
        </main>
    )
}

export default Home
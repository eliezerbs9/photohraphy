import React from 'react'
import Profile from './Profile//Profile'
import Navbar from './Navbar'
import Albuns from './Albuns/Albuns'


const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <div className="content">
                <Profile />
                <Albuns />
            </div>
        </main>
    )
}

export default Home
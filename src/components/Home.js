import React from 'react'
import Profile from './Profile'
import Navbar from './Navbar'

const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <div className="content">
                <Profile />
            </div>
        </main>
    )
}

export default Home
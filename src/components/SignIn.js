import React, {useState} from 'react'
import {register} from '../scripts/auth'

const SignUp = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    

    return (
        <section id="register">
            <div className="register_box">
                <h1>Register</h1>

                <label className="register_box__label" htmlFor="name">Name</label>
                <input 
                    className="register_box__input"
                    name="name" 
                    type="email" 
                    placeholder="Your name"
                    onChange={(e) => setName(e.target.value)}/>

                <label className="register_box__label" htmlFor="email">Email</label>
                <input 
                    className="register_box__input"
                    name="email" 
                    type="text" 
                    placeholder="example@email.com"
                    onChange={(e) => setEmail(e.target.value)}/>
                <p className="register_box__msg register_box__msg--error"></p>

                <label className="register_box__label" htmlFor="password">Password</label>
                <input 
                    className="register_box__input"
                    name="password" 
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}/>
                <p className="register_box__msg register_box__msg--error"></p>

                <p className="register_box__msg">Already have an account yet ? <span>click here</span></p>

                <button 
                    className="btn btn--lg"
                    onClick={() => {
                        register(name, email, password)
                    }}
                >Register</button>
            </div>
        </section>
    )
}

export default SignUp
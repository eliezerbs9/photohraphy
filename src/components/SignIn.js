import React, {useState, useContext} from 'react'
import {Link ,Redirect} from 'react-router-dom'
import {register} from '../scripts/auth'
import {AuthContext} from './Providers/AuthContext'


const SignUp = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const {user} = useContext(AuthContext)

    

    return (
        <>
            {user && (
                <Redirect to="/" />
            )}
            {!user && (
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

                    <p className="register_box__msg">Already have an account yet ? <span><Link to="/login">click here</Link></span></p>

                    <button 
                        className="btn btn--lg"
                        onClick={() => {
                            let result = register(name, email, password)
                            if(result){
                                console.log('RETURN OK')
                                return (
                                    <Redirect to="/" />
                                )
                            }
                        }}
                    >Register</button>
                </div>
            </section>
            )}
        </>
    )
}

export default SignUp
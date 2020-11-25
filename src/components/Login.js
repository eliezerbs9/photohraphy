import React, {useState, useContext} from 'react'
import {login} from '../scripts/auth'
import {Redirect} from 'react-router-dom'
import {AuthContext} from './Providers/AuthContext'
import {Link} from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const {user} = useContext(AuthContext)
    const [error, setError] = useState(null)

    return (
        user ? (
            <Redirect to="/" />
        ) : (
            <section id="login">
                <div className="login_box">
                    <label className="login_box__label" htmlFor="email">Email</label>
                    <input 
                        className="login_box__input" 
                        name="email" 
                        type="text" 
                        placeholder="example@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="login_box__msg login_box__msg--error"></p>

                    <label className="login_box__label" htmlFor="password">Password</label>
                    <input 
                        className="login_box__input" 
                        name="password" 
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />


                    <p className="login_box__msg login_box__msg--error"></p>
                    <p className="login_box__msg">Dont have an account yet ? <span><Link to='signin'>click here</Link></span></p>

                    <div className="output">
                        {error && (
                            <p style={{color: 'red', margin: '0', fontSize: 'xx-small'}}>{error}</p>
                        )}
                    </div>

                    <button className="btn btn--lg"  onClick={async (result) => {
                        result = await login(email, password);
                        console.log('result: ', result)
                        if(!result.a){
                            setError(result.message)
                        }
                    }}>Login</button>
                </div>
            </section>
        )
    )
}

export default Login
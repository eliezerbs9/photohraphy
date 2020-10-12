import React, {useContext} from 'react'
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from './AuthContext'


const PrivateRoute = ({component: Component, ...rest}) => {
    
    const {user} = useContext(AuthContext)

    console.log('private route user: '+user)

    return (
        <Route 
            {...rest} 
            render={props => {
                if(!!user){
                    return <Component {...props} />
                }
                else{
                    console.log('fora da route authenticated')
                    return <Redirect to="/login" />
                }
        }} />
    )
}


export default PrivateRoute
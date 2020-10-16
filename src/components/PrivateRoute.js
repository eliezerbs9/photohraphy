import React, {useContext} from 'react'
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from './Providers/AuthContext'


//THIS ROUTE ACCESS THE USER PASSED DOWN BY ITS PARENT COMPONENT WITH IS THE authContext
const PrivateRoute = ({component: Component, ...rest}) => {
    
    const {user} = useContext(AuthContext)

    console.log(+user)

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
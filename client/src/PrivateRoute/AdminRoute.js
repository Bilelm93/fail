import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...props }) => {

    // const isAuth = useSelector(state => state.authReducer.isAuth)
    const token =localStorage.getItem("token")
    const client = useSelector(state => state.clientReducer.client);
    
    if (token||client && client.role === "admin") {
        return <Route component={Component}{...props}/>
    } else
    return <Redirect to="signup"/>
}

export default AdminRoute

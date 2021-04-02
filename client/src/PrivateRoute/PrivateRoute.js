import React from 'react'
import { Redirect, Route } from 'react-router'


const PrivateRoute =({component : Component , ...props})=> {
    const token =localStorage.getItem("token")
    if(token) {
       return <Route component={Component}{...props}/>
    }
    
        return <Redirect to="signin"/>
           
    }


export default PrivateRoute



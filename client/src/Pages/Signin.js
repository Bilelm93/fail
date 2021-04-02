import {React, useState} from 'react'
import {useDispatch} from 'react-redux'
import { signin } from '../Redux/Action/clientAction'
import {Link} from 'react-router-dom'


import './signup.css'

const Signin=({history})=>{

    const [client , setClient]=useState({})
    

const handlechange=(e)=>{
    setClient({...client , [e.target.name]:e.target.value})
}

const dispatch = useDispatch();
    return (
        <>

<div class="containerS">

    <div id="signup">

        <div class="header">
        
            <h3>Sign Up</h3>
            
            <p>You want to fill out this form</p>
            
        </div>
        
        <div class="sep"></div>

        <div class="inputs">
      

        <input type="email" placeholder="Your Email" name="email" onChange={handlechange} /> 
    
    
        <input type="password" placeholder="Password" name="password" onChange={handlechange} />
        
     
        
        <button id="submit" onClick={()=>dispatch(signin(client , history))}>LOG IN </button>
        <label>I Dont have account  <Link to="/signup">Register</Link> </label>
    </div>
   
    </div>

    </div>

​
  
  </>

    )
}

export default Signin
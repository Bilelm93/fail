import {React, useState} from 'react'
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {signup} from '../Redux/Action/clientAction'


import './signup.css'

const Signup=({history})=>{

const [newclient , setNewclient]=useState({})

const handlechange=(e)=>{
    setNewclient({...newclient , [e.target.name]:e.target.value})
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
        

        
            <input type="text" placeholder="Your Name" name="name" onChange={handlechange} /> 
            
            <input type="text" placeholder="Your Picture" name="img" onChange={handlechange} /> 
            
        <input type="text"  placeholder="Your Your Phone"name="phone" onChange={handlechange} /> 
        
        <input type="email" placeholder="Your Email" name="email" onChange={handlechange} /> 
      
        <input type="password"placeholder="Your Password" name="password" onChange={handlechange} />
            
           
             <button id="submit"  onClick={()=>dispatch(signup(newclient , history))}>SIGN UP</button>
             <div class="checkboxy">
                <label>I have account <Link to="/signin">Sign in</Link></label>
            </div>
        
      
            </div>

</div>

</div>
​

        
     

    
       

  
       
        

​
</>
        
     
    )
}

export default Signup
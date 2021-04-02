import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../Redux/Action/clientAction'

import './Comp.css'

const Navbar=()=>{

const isAuth = useSelector(state=>state.clientReducer.isAuth)

const dispatch = useDispatch()
    return (
        <div className="navme">
<nav className="navbar navbar-expand-lg navbar-light bg-light nav">
{/* <img src="image01.png" style={{width:80, padding: 0}}/> */}
  <a className="navbar-brand" href="/"> Name app  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
           
    </ul>
    <div className="form-inline my-2 my-lg-0">

   {
   isAuth ? (<div>
     <Link to="/client"><button className="btn btn-outline-success my-2 my-sm-0" type="submit" >PROFIL</button></Link> {" "}
   <Link to="/signin"><button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>dispatch(logout())}>LOG OUT</button> </Link> 
   
   </div>
   ):(

    <Link to="/signin">
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">SIGN IN</button>
     </Link>
    )
   }

          

    
    </div>
  </div>
</nav>
<br/><br/>
        </div>
    )
}

export default Navbar
import {Switch , Route} from 'react-router'

import Client from './Pages/Client/Client';
import Landpage from './Pages/landpage/Landpage';
import Signup from './Pages/Signup';
import Admin from './Pages/Admin/Admin'
import Errors from './Pages/Errors';
import Signin from './Pages/Signin';

import Navbar from './Comp/Navbar';
import Footer from './Comp/Footer';


import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { current } from './Redux/Action/clientAction';
import PrivateRoute from './PrivateRoute/PrivateRoute'
// import AdminRoute from './PrivateRoute/AdminRoute'



function App() {

const dispatch = useDispatch()

useEffect(()=>{
dispatch(current())
})




  return (
    <div >
     <Navbar/>
    
<Switch>
<Route exact path="/" component={Landpage}/>
<Route path="/signup" component={Signup}/>

<PrivateRoute path="/client" component={Client}/>

<Route path="/admin" component={Admin}/>
{/* <AdminRoute path="/admin" component={Admin}/> */}
<Route path="/signin" component={Signin}/>
<Route path="/*" component={Errors}/>





</Switch>

<br/><br/><br/><br/><br/>
   <Footer/>
    </div>
  );
}

export default App;

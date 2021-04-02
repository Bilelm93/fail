
import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import ClientAddPub from './ClientAddPub'
import {useEffect} from 'react'
import './Client.css'
import ClientSendMsg from './ClientSendMsg'
import PubList from './PubList'
import { filterpub } from '../../Redux/Action/PubAction'


const Client=()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(filterpub(client._id))
      },[])


      
   
// import current user from the state 
const client = useSelector(state => state.clientReducer.client)

const pub = useSelector(state=> state.pubReducer.pub )



    return (
        <div>



<div className="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={client.img} alt=""/>
                          
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                  <h3> Welcome    {client.name}</h3>  
                                    </h5>
                                  <br/> <br/> <br/> <br/> 
                                    <p class="proile-rating"> <span></span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                   
                                   
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pub" role="tab" aria-controls="home" aria-selected="true">Add publication</a>
                                   <ClientAddPub id={client._id}/>

                                  
                                </li>
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pub" role="tab" aria-controls="home" aria-selected="true">Send a message to Admin</a>
                                  <ClientSendMsg id ={client._id}/>
                                </li>

                               
                                <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#pub" role="tab" aria-controls="home" aria-selected="true">Liste Publication</a>

                                {pub.map(el => <PubList el={el}  />)  } 
                                
                               

                            
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <p>WORK LINK</p>
                          
                            <p>SKILLS</p>
                           
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="pub" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                           
                                           
                                        </div>
                                       
                                       
                                      
                                       
                            </div>
                            <div class="tab-pane fade" id="msg" role="tabpanel" aria-labelledby="profile-tab">
                                       
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
    )
}

export default Client
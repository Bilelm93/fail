import {useDispatch} from 'react-redux'
import React, {useState} from 'react'

import Modal from 'react-bootstrap/Modal'
// import { Link } from 'react-router-dom'
import { sendmsg } from '../../Redux/Action/MsgAction'

import { Button } from 'react-bootstrap';




const ClientSendMsg =({id})=>{
   

    const [newmsg , setNewmsg]=useState({})

    const handlechange=(e)=>{
        setNewmsg({...newmsg ,client, [e.target.name]:e.target.value})
        
    }
    const dispatch = useDispatch()

   const client = id  



   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
   const SendMSG=()=>{

    dispatch(sendmsg(newmsg))
setShow(false)
   }
    return (
        <>
<br/><br/>

<span>
 

  
 

    <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>Send Message </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Message for admin </Modal.Title>
        </Modal.Header>
        <Modal.Body>

<input type="text" name="title" placeholder="your title" onChange={handlechange}/>

<input type="text" name='desc' placeholder="your desc" onChange={handlechange}/>
<br/>




        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={SendMSG}>
          send Message
          </Button>
         
        </Modal.Footer>
      </Modal> 
 
  
    
 

</span>



        </>
    )
}

export default ClientSendMsg
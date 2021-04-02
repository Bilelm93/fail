import {useDispatch} from 'react-redux'
import React, {useState} from 'react'
import {addpub} from '../../Redux/Action/PubAction'
// import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'

import { Button } from 'react-bootstrap';

import './Client.css'


const ClientAddPub=({id})=>{

    const [newpub , setNewpub]=useState({})

    const handlechange=(e)=>{
        setNewpub({...newpub ,client, [e.target.name]:e.target.value})
    }
    const dispatch = useDispatch()


    const client = id
   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const ADDPUB=()=>{
 
     dispatch(addpub(newpub))
 setShow(false)
    }



    return (


        <>
<Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>Add publication </Button>


<Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Add your publication </Modal.Title>
  </Modal.Header>
  <Modal.Body>

<input type="text" name="title" placeholder="your title" onChange={handlechange}/>
<input type="text" name="img" placeholder="your imgURL" onChange={handlechange}/>
<input type="text" name='desc' placeholder="your desc" onChange={handlechange}/>
<br/>




</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ADDPUB}>
          Add publication
          </Button>
         
        </Modal.Footer>
      </Modal> 
 
  
{/* <Link to="/client">
<Button variant="info" onClick={()=>dispatch(addpub(newpub))} >send pub</Button>
</Link> */}

        </>
    )
}

export default ClientAddPub
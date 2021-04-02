import React, {useState} from 'react'
import { Button, Alert } from 'react-bootstrap';
import { useDispatch} from 'react-redux'
import { deletemsg } from '../../Redux/Action/MsgAction'
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

import './Admin.css'

const AdminMsg=({el })=>{




const [show, setShow] = useState(false);



const dispatch = useDispatch()
const Removemsg =()=>{
    dispatch(deletemsg(el._id))
   
}


  return (

<>


<Card style={{ width: '50rem' , textAlign:"center",  margin: "auto" }}>
  <Card.Header className="deux">Title message  : {el.title} {!show && <Button variant="warning" onClick={() => setShow(true)} style={{width:50}}>✉</Button>}</Card.Header>
  <ListGroup variant="flush">
    {/* <ListGroup.Item></ListGroup.Item> */}
  
 

<div style={{width:900 , display : "flex"}}>



</div  >
    <Alert show={show} variant="success" >
    <Alert.Heading>{el.title}</Alert.Heading>
    <p>
    {el.desc}
    </p>
    <p>
    {el.client}
    </p>
    <hr />
    <div className="d-flex justify-content-end">
      <Button onClick={() => setShow(false)} variant="info"  style={{marginRight:10 }}>
      ▲
      </Button>


      <Button  variant="danger" onClick={Removemsg}>
      ✘
      </Button>

    </div>
  </Alert>


      

  </ListGroup>
</Card>

      </>
  )
}

export default AdminMsg







import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { useDispatch} from 'react-redux'
import { deleteclient } from '../../Redux/Action/clientAction'
import Modal from 'react-bootstrap/Modal'


import './Admin.css'

const AdminClient=({lclient})=>{


    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          More information about Client 
        </Tooltip>
      );
      
     
      const dispatch = useDispatch()
      const Removeclient =()=>{
          dispatch(deleteclient(lclient._id))
         
      }   



      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    

  return (

<>

<figure>
  <img src={lclient.img} alt="client" />
  <div className="ab">
    <label style={{paddingTop: 5}}> {lclient.name}</label>

    <div style={{float:"right"}}>




  
    <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>

    <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>▲</Button>

    </OverlayTrigger>

    <Button variant="danger"className="btn" onClick={Removeclient}>✘</Button>


    
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>information about Client </Modal.Title>
        </Modal.Header>
        <Modal.Body>
Phone : {lclient.phone}
<br/>
Email : {lclient.email}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          ▼
          </Button>
         
        </Modal.Footer>
      </Modal>
 
    </div>
  </div>
</figure>



     
       











  


   

</>
  )
}

export default AdminClient







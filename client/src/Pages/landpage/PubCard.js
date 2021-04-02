import React,{useState} from 'react';

import Tooltip from 'react-bootstrap/Tooltip'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'



import '../Client/Client.css'




const PubCard=({el})=>{

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {el.desc}
    
    </Tooltip>
  );
  
 
 



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 

  return (
    <>
   <span>
   <OverlayTrigger
          placement="top"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}>
  <img src={el.img} alt="client" />
  </OverlayTrigger>
  <div className="abc">
    <label style={{paddingTop: 5}}> {el.title}</label>
    
    <div style={{float:"right"}}>
  
 

    <Button variant="info"   style={{marginRight:10 }} onClick={handleShow}>▲</Button>



 




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>information about Client </Modal.Title>
        </Modal.Header>
        <Modal.Body>
Phone : {el.phone}
<br/>
Email : {el.email}

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          ▼
          </Button>
         
        </Modal.Footer>
      </Modal> 
 
    </div>
    
  </div>

</span>
    

    </>
  );
}
 export default PubCard
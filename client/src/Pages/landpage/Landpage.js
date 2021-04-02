import React from 'react'
import PubCard from './PubCard'
import Card from 'react-bootstrap/Card'
import {useSelector , useDispatch} from 'react-redux'

import {useEffect} from 'react'
import '../../App.css'


import {getpub} from '../../Redux/Action/PubAction'

const Landpage=()=>{




    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getpub())
      },[dispatch])
   
// import current user from the state 


const pub = useSelector(state=> state.pubReducer.pub )


    return (
        <div >


<>
 
  <Card>
    Publicite
     {/* <Card.Img variant="bottom" src="image02.png" style={{width:200}} className="img"  />  */}
   
 
  </Card>
  <br/>  <br/>  <br/> 
</>







<div className="outil">
{pub.map(el => <PubCard  el={el} />)  } 
</div>



 this page landpage
        </div>
    )
    
}

export default Landpage
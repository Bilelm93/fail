import React from 'react'
import {useSelector , useDispatch} from 'react-redux'

import {useEffect} from 'react'
import { getmsg } from '../../Redux/Action/MsgAction'
import { getcl } from '../../Redux/Action/clientAction'

import AdminMsg from './AdminMsg'
import AdminClient from './AdminClient'

import './Admin.css'

const Admin=()=>{

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getmsg())
      },[dispatch])


const mssg = useSelector(state=> state.msgReducer.msg )

 
     useEffect(() => {
       dispatch(getcl())
       },[dispatch])

const ALLCLIENT = useSelector(state=> state.clientReducer.Allclient )


console.log(ALLCLIENT)

    return (
        <div>
<span>Liste des Message </span>
          <div className="outil2">
{ mssg.map(el=> <AdminMsg el={el}/>)}

           </div>



<div>

  <div>Liste od client</div>

<div className="outil3">

  { ALLCLIENT.map(lclient=> <AdminClient lclient={lclient} />)}


  </div>
</div>
        </div>
    )
}

export default Admin
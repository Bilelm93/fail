import { GET_MSG , FAIL_MSG } from "./MsgTypes"
import axios from 'axios'




      
//-----------------------------getmsg-----------------------------------
    export const getmsg =()=>async(dispatch)=>{

        try {
            let result = await axios.get('./api/msg/getmsg')
        
            dispatch({type:GET_MSG, payload:result.data})//{msg , data{imah , title , desc}}
         
        } catch (error) {
            dispatch({type: FAIL_MSG, payload:error.response.data.errors})//we return a table of object have error [{error}]
        }
        }
//-----------------------------addmsg-----------------------------------

export const sendmsg = (newmsg) => async (dispatch) => {
      
    try {
      

          const result = await axios.post('./api/msg/sendmsg', newmsg);
          dispatch({ type:GET_MSG, payload:result.data })
           
    } catch (error) {
           dispatch({type: FAIL_MSG, payload:error.response.data.errors})
          
    }
    
};



//-----------------------------deletemsg-----------------------------------

export const deletemsg = (idmsg) => async (dispatch) => {
      
    try {
          const result = await axios.delete(`./api/msg/deletemsg/${idmsg}`);
          dispatch({ type:GET_MSG, payload:result.data })
          
    } catch (error) {
        // console.log(error.msg);
        dispatch({type: FAIL_MSG, payload:error.response.data.errors})
      
          
    }
    
};




// export const deleteContact =(idcontact)=> dispatch=>{
//     axios.delete(`/api/example/deleteuser/${idcontact}`)
//     .then( res=>dispatch(getContacts()))
//     .catch(err=>console.log(err))
// }






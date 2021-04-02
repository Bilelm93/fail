import { GET_PUB , FAIL_PUB } from "./PubTypes"
import axios from 'axios'






//----------------------------getPub---------------------------


// export const getpub=()=>dispatch=>{
//     axios.get('./api/pub/getpub')
//     .then( res=>dispatch({type:GET_PUB , payload:res.data}))
//     .then(res=>console.log("res" ,res))
//     .catch(err=>console.log(err))
// }

    export const getpub =()=>async(dispatch)=>{

        try {
            const result = await axios.get('./api/pub/getpub')
        
            dispatch({type:GET_PUB, payload:result.data})//{msg , data{imah , title , desc}}


         
        } catch (error) {
            // console.log(error.msg);
           dispatch({type: FAIL_PUB, payload:error.response.data.errors})//we return a table of object have error [{error}]
        }
        }
//-----------------------------addPub-----------------------------------

export const addpub = (newpub) => async (dispatch) => {
      
    try {
          const result = await axios.post('./api/pub/addpub', newpub);
          dispatch({ type:GET_PUB, payload:result.data })
        
    } catch (error) {
        // console.log(error.msg);
       dispatch({type: FAIL_PUB, payload:error.response.data.errors})
            
    }
    
};

//----------------------------filterPub---------------------------


export const filterpub =(pubid)=>async(dispatch)=>{

    try {
        const result = await axios.get(`./api/pub/filterpub/${pubid}`)
    
        dispatch({type:GET_PUB, payload:result.data})


     
    } catch (error) {
        // console.log(error.msg);
       dispatch({type: FAIL_PUB, payload:error.response.data.errors})//we return a table of object have error [{error}]
    }
    }











// export const putContact=(idContact , updatedContact)=>dispatch=>{
//     axios.put(`/api/example/updateuser/${idContact}`,updatedContact)
//     .then( res=>dispatch(getContacts()))
//     .catch(err=>console.log(err))
// }
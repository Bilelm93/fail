import axios from 'axios'
import { FAIL_CLIENT, LOAD_CLIENT, LOGOUT_CLIENT, SIGNIN_CLIENT, SINGUP_CLIENT , CURRENT_CLIENT , GET_CLIENT } from './clientTypes'



// the seconde function sync is an middleware return 
export const signup =(newclient , history)=>async(dispatch)=>{

dispatch({type:LOAD_CLIENT})

try {
    let result= await axios.post('./api/client/signup', newclient)

    dispatch({type:SINGUP_CLIENT, payload:result.data})//{msg , current client , token}
   history.push("/client")
} catch (error) {
    dispatch({type: FAIL_CLIENT, payload:error.response.data.errors})//we return a table of object have error [{error}]
}
}


// 
export const signin = (client , history)=>async(dispatch)=>{

    dispatch({type:LOAD_CLIENT})
    try {
        let result = await axios.post('./api/client/signin' , client)
        dispatch({type:SIGNIN_CLIENT , payload:result.data})//{msg , current user , token}
        history.push("/client")
    } catch (error) {
        dispatch({type: FAIL_CLIENT, payload:error.response.data.errors})//we return a table of object have error [{error}]
    }

}


export const logout=()=>{
    return (
      {  type: LOGOUT_CLIENT}
    )
}




// 
export const current = (client)=>async(dispatch)=>{

    dispatch({type:LOAD_CLIENT})
    try {
        // imort data client token in localstorage to object  
        const config={headers:{auth:localStorage.getItem("token")}}

        let result = await axios.get('./api/client/current' , config)
        dispatch({type:CURRENT_CLIENT , payload:result.data})//{msg , current user , token}
       
    } catch (error) {
        dispatch({type: FAIL_CLIENT, payload:error.response.data.errors})//we return a table of object have error [{error}]
    }

}




//-----------------------------getclient-----------------------------------
export const getcl =()=>async(dispatch)=>{

    try {
        let result = await axios.get('./api/client/getcl')
    
        dispatch({type:GET_CLIENT, payload:result.data})//{msg , data{imah , title , desc}}
     
    } catch (error) {
        //    console.log(error);
     dispatch({type: FAIL_CLIENT, payload:error.response.data.errors})//we return a table of object have error [{error}]
    }
    }





    //-----------------------------deleteclient-----------------------------------

export const deleteclient = (idclient) => async (dispatch) => {
      
    try {
          const result = await axios.delete(`./api/client/deleteclient/${idclient}`);
          dispatch({ type:GET_CLIENT, payload:result.data })
          
    } catch (error) {
        // console.log(error.msg);
      dispatch({type: FAIL_CLIENT, payload:error.response.data.errors})
          
    }
    
};

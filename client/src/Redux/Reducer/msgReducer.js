import {GET_MSG , FAIL_MSG } from '../Action/MsgTypes'


// initialstate 
const initialState={
    msg:[], 
    loadmsg : false
  
}


// pure function : return new state or the same state
// 2 paeametre (initialstate , action(type,payload))
const msgReducer =(state=initialState , {type, payload})=>{
    switch (type) {
        


        case GET_MSG :
            return {...state, msg:payload}
    
            case FAIL_MSG:
                return {...state , loadmsg: false , errors:payload}
       
               
        default: 
            return state
          
    }

}

 
export default msgReducer
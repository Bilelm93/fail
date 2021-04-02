import {GET_PUB , FAIL_PUB } from '../Action/PubTypes'












// initialstate 
const initialState={
    pub:[] ,
   nomsg : false
  
}


// pure function : return new state or the same state
// 2 parametre (initialstate , action(type,payload))
const pubReducer =(state=initialState, {type, payload})=>{
    switch (type) {
        


        case GET_PUB :
             return {...state, pub:payload}
            // return {...state, pub:payload.pub}
            case FAIL_PUB:
                return {...state , nomsg: true , errors:payload}
       
               
        default: 
            return state
          
    }

}

 
export default pubReducer




// const initState ={
//     pub :{}
// }

// export const  pubReducer =(state=initState , action)=>{

//     switch (action.type) {

//         case GET_PUB :
//         return {...state, pub : action.payload}

//         default : return state
//     }
// }

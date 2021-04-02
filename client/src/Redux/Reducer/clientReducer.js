// import the type 

import { FAIL_CLIENT, LOAD_CLIENT, LOGOUT_CLIENT, SIGNIN_CLIENT, SINGUP_CLIENT , CURRENT_CLIENT , GET_CLIENT } from "../Action/clientTypes"


// initialstate 
const initialState={
    Allclient:[],
    client:{},
    loadclient: false , 
    errors:[] ,
    isAuth : false // just in display logout with is authentifier
}


// pure function : return new state or the same state
// 2 paeametre (initialstate , action(type,payload))
const clientReducer =(state=initialState , {type, payload})=>{
    switch (type) {
        case LOAD_CLIENT: return {...state , loadclient: true}

        case SIGNIN_CLIENT: 
            localStorage.setItem("token",payload.token)
            return {...state, loadclient: false , client:payload.client , isAuth: true}
              

        case SINGUP_CLIENT:
            localStorage.setItem("token",payload.token)
            return {...state, loadclient: false , client:payload.client , isAuth: true}

        case FAIL_CLIENT:
            return {...state , loadclient: false , errors:payload}

        case LOGOUT_CLIENT:
            localStorage.removeItem("token")
            return {  
                client:{},
                loadclient: false , 
                errors:[] ,
                isAuth : false}

        case CURRENT_CLIENT:
            return {...state, loadclient: false , client:payload , isAuth: true}


            case GET_CLIENT :
                return {...state, Allclient:payload}
    
        default: 
            return state
          
    }

}



// export 
export default clientReducer
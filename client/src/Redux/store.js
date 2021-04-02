// import package 
import {createStore, applyMiddleware , compose} from 'redux'

// import routReducer
import routReducer from './Reducer/combineReducers'
import thunk from 'redux-thunk'


const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ||compose
//  store
const store =createStore(routReducer, composeEnhancer(applyMiddleware(thunk)))



// export
export default store
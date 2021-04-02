import {combineReducers} from 'redux'
import clientReducer from './clientReducer'
import pubReducer from './pubReducer'
import msgReducer from './msgReducer'


const routReducer = combineReducers({clientReducer , pubReducer , msgReducer})


export default routReducer
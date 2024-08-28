import {combineReducers} from 'redux'


import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';


import {composeWithDevTools} from '@redux-devtools/extension'

import {getAllPizzasReducer} from './reducers/pizzareducers'
import {cartReducer} from './reducers/cartReducer'
import { registerUserReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer
})


const cartItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) :[];
const initialState={ 
    cartReducer:{cartItems: Array.isArray(cartItems) ? cartItems : []
}
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store;

import { createStore, applyMiddleware} from "redux";
import { reducerFunc } from "./../reducer/reducer";
import thunk from 'redux-thunk';


// Inital State
const initialState = {
    feedCalls: [],
    call: null
}

export const Store = createStore(reducerFunc, initialState, applyMiddleware(thunk));
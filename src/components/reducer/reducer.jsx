import { 
    GET_ALL_CALLS, 
    GET_CALL_BY_ID, 
    ARCHIVE_CALL, 
    RESET
} from "../actions/actions"; 

export function reducerFunc(state, action) {
   
  switch (action.type) { 
        case GET_ALL_CALLS: 
            return  { ...state, feedCalls: action.payload} 
        case GET_CALL_BY_ID:
            return  {call: action.payload, ...state}
        case ARCHIVE_CALL:
            return  {feedCalls: action.payload, ...state}
        case RESET:
            return {feedCalls: action.payload, ...state}
        default:
            return state;
  }
}

import axios from 'axios'

const domain = 'https://aircall-job.herokuapp.com';

export const GET_ALL_CALLS = `GET_ALL_CALLS`;
export const GET_CALL_BY_ID = `GET_CALL_BY_ID`;
export const ARCHIVE_CALL = `ARCHIVE_CALL`;
export const RESET = `RESET`;
 
export function GetCallsToDisplay(){
    return async function (dispatch) { 
        const req = await axios.get(`${domain}/activities`).then(x=>x.data).catch(e=>e);
        return dispatch({
            type: GET_ALL_CALLS,
            payload: req
        })

    }
}

export const GetCallById = function(id){
    return async function (dispatch) { 
    
        const req = await axios.get(`${domain}/activities/${id}`).then(x=>x.data).catch(e=>e);
        return dispatch({
            type: GET_CALL_BY_ID,
            payload: req
        })

    }
}

export const ArchiveCall = function(id, state){
    return async function (dispatch) { 
    const req = await axios.post(`${domain}/activities/${id}`, {
        is_archived: state
    }).then(x=>x.data).catch(e=>e);  
    
        return dispatch({
            type: ARCHIVE_CALL,
            payload: req
        })

    }
}

export const Reset = function(){
    return async function (dispatch) { 
        const req = await axios.get(`${domain}/reset`).then(x=>x.data).catch(e=>e);
        
        return dispatch({
            type: RESET,
            payload: req
        })

    }
}

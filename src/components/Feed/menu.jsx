import React from 'react';
import {useLocation, useHistory} from 'react-router-dom'

export const Menu = ({props, location}) => {
    const Pathname = location.pathname;
    const Query = location.search;
    const H = useHistory();
    const call_id = (Query)? String(Query).split("&")[1].split("=")[1] : '';
    const menuQuery = (Query)? String(Query).split("&")[0].split("=")[1] : '';

    const CloseMenu = ()=>{
        if(Query.includes("menu")) H.goBack()
    }
    
    const ArchiveCall = (state)=>{
        // Call API
        props.ArchiveCall(call_id, state);
        // Close Menu
        CloseMenu();
        // Fade Out
        const callElememt = document.querySelector(`.callContainer[data-id="${call_id}"]`);
        callElememt.style.left = '150%';
        callElememt.style.height = 0
        callElememt.style.padding = 0;
        callElememt.style.display = 'none';
        // Get New Elements
        props.GetCallsToDisplay(); 
    }
 

    return (
        <div className="menu" style={(menuQuery=='true')?{left:"0"}:null} >
            <div className="menuInn">
                <div className="menuItemHld">
                    {
                        (!Pathname.includes('archived'))?
                        <button className="menuItem archive" onClick={()=>ArchiveCall(true)}>Archive Call</button>
                        :
                        <button className="menuItem archive" onClick={()=>ArchiveCall(false)}>Un-Archive Call</button>
                    }
                </div>
                <div className="menuItemHld">
                    <button className="menuItem close" onClick={CloseMenu}>Close</button>
                </div>
            </div>
        </div>
    )
}

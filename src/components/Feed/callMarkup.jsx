import React from 'react'
import redBottom from './../css/redBottom.svg'
import greenTop from './../css/greentop.svg'
import { useHistory, useLocation } from 'react-router-dom'

export const CallMarkup = ({call, call_id, callCount}) => {
    const H = useHistory();
    const L = useLocation();

    const OpenMenu = ()=>{
        if(!L.search.includes("menu"))  H.push(`?menu=true&call_id=${call_id}`)
    }
 
    return (
        <div key={call.id} className="callContainer" data-id={call.id}>
            <div className="callContainerInn">
                <div className="callBodyLeft">{
                    <div className="callBodyLeftInn">
                        {
                            (isNaN(String(call.from).charAt(1)))? String(call.from).split("")[0] : "U"
                        }
                    </div>
                }
                </div>
                <div className="callBodyMiddle">
                    <div className="callBodyMiddleInn">
                        <div className={"callBodyTop"}>{call.from}</div>
                        <div className="callBodyBottom">From {call.via}</div>
                            <div className="callBodyRight">
                            <div className="callBodyRightInn">
                                {
                                    <img className="calltypeIcon" src={
                                        (call.call_type=='missed')? redBottom:greenTop
                                    } />
                                }
                                {
                                    new Date(call.created_at).toLocaleTimeString().split(':').slice(0,2).join(":")
                                } 
                                {
                                    new Date(call.created_at).toLocaleTimeString().split(':').slice(2,3)[0].includes(" AM") ? 'AM' : 'PM'
                                }
                            </div>
                            <div className="callCount" data-from={call.from}></div>
                        </div>
                    </div>
                </div>
                <div className="settingsIcon">
                    <div className="settingsIconInn" onClick={OpenMenu}>...</div>
                </div>                                        
            </div>
        </div>
    )
}

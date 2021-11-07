import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import {CallMarkup} from './callMarkup' 
import { Menu } from './menu';

const Feed = ({props, showArchivedCalls}) => {
    const [Calls, setCalls] = useState([]); 
    const L = useLocation();
    const paints = {};

    useEffect(() => {
        props.GetCallsToDisplay();
    }, []);

    useEffect(()=>{
        setCalls(props.feedCalls);
    },[props.feedCalls]); 

    const updateCallCount = (from)=>{
        const element = document.querySelector(`.callCount[data-from="${from}"]`);
        element.style.display = 'grid';
        element.innerText = paints[from]
    }
    
    return (
        <div className="feed">
            <div className="feedInn">
                {
                    (Calls.length>0)?
                    Calls.map((a)=>{
                        if(a.is_archived == showArchivedCalls){
                            paints[a.from] = paints[a.from] ? paints[a.from]+1 : 1;
                            if(paints[a.from] == 1){
                                return <CallMarkup 
                                call={a} 
                                key={a.id} 
                                call_id={a.id} 
                                count={paints[a.from]} 
                                paints={paints}
                                />
                            } 
                            else setTimeout(()=> updateCallCount(a.from), 100)                         
                        }
                    })
                    :
                    <div>Loading...</div>
                }
                <Menu 
                    location={L}
                    props={props}
                />
            </div>     
        </div>
    )
}
export default Feed
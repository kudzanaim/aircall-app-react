import React from 'react'

import dialIcon from './../css/dialpad.svg';
import phoneIcon from './../css/phone.svg';
import boxIcon from './../css/box-alt.svg';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const Footer = ({props}) => {
    const H = useHistory()
    const Path = useLocation().pathname;
    
    const routeToPage = (route)=> {
        H.push(route);
        props.GetCallsToDisplay()
    } 

    useEffect(()=>{
        
    },[Path])

    return (
        <div className="footer">
            <div className="footerInn"> 
                <div className="footerIconHolder calls" onClick={()=>routeToPage('/')}>
                    <div className="footerIconImgHold">
                        <img className="footerIconImg" src={phoneIcon}/>
                    </div>
                    <div 
                        className="footerTextInn"
                        style={(!Path.includes('archived')? {color:'green'}:{})}
                    >Calls</div>
                </div>
                <div className="footerIconHolder dialer">
                    <img className="footerIconImg" src={dialIcon}/>
                </div>
                <div className="footerIconHolder calls" onClick={()=>routeToPage('/archived')}> 
                    <div className="footerIconImgHold">
                        <img className="footerIconImg" src={boxIcon}/>
                    </div>
                    <div 
                        className="footerTextInn" 
                        style={(Path.includes('archived')? {color:'#6ac734'}:{})}
                    >Archived</div>
                </div>
            </div> 
        </div>
    )
}

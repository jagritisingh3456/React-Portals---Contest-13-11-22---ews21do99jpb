import React from 'react';
import  ReactDOM  from 'react-dom';

//complete this function using portals
const PortalButton=({buttonclick})=>{
    return (
        <div id="portal-button">
            <button id="button" onClick={()=>buttonclick()}>Click</button>
        </div>
        
    )
}
export default PortalButton;

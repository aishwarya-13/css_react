import React from "react";
import Text from './text'

const SideNavBar = ()=>{
    return(
        <span id={'sidenavbar'}>
            <Text text={`Side nav bar`}/>
            {/* <span className={`sidenavbar-content`}>
                {`Side nav bar`}
            </span> */}
        </span>
    )
};

export default SideNavBar;
import React from "react";
import Text from './text'

const RightPart = ()=>{
    return(
        <span id={`right-part`}>
            <Text 
                text={`I am right part`}/>
            {/* <span className={`right-part-content`}>
                {`I am right part`}
            </span> */}
        </span>
    )
};

export default RightPart;
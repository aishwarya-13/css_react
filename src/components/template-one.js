import React from "react";
import Footer from "./footer";
import Header from "./header";
import SideNavBar from "./side-nav-bar";
import RightPart from "./right-mid-part";
import '../css/template-one.css';

const TemplateOne = ()=>{
    return(
        <div id={'template-one'}>
            <Header/>
            <div id={'template-one-mid-container'}>
                <SideNavBar/>
                <RightPart/>
            </div>
            <Footer/>
        </div>
    )
};

export default TemplateOne;
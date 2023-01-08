import React from "react";
import {createRoot} from "react-dom/client";
// import logoImage from "./assets/logo.jpg";
// import userIcon from "./assets/userIcon.png"

import Header from "./component/Header"
import Body from './component/Body'
import Footer from "./component/Footer"




const UserIconComponent = function () {
    return (
        <span className="btn-wrap">
            <a href="#" className="logo-wrap">
                <img className="avatar avata-round" src={userIcon} alt="" height="50" width="50" /> 
            </a>
        </span>
    )
}




    
const AppLayout = ()=> {
    return (
        <>
       
        <Header />
        <Body />
        <Footer />
        </>
    )
}



export default AppLayout;
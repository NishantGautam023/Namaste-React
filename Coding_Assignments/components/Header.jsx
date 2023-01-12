import React from "react";
import logoImage from "../assets/logo.jpg"
import checkoutcart from "../assets/checkout.jpg"


const navitems = (
        <>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">About Us</a>
                    </li>

                    <li>
                        <a href="#">Pricing</a>
                    </li>

                </ul>

                <span className="btn-wrap">
                    <a href="/" className="logo-wrap">
                        <img src={checkoutcart} alt="" height="70" width="70" />
                    </a>
                 </span>
        </>
)


const Header = ()=> {
    return (
        <> 
             <header>
                    <a href="/" className="logo-wrap">
                      <img src={logoImage} alt="" height="70" width="70" />
                    </a>
                
                {navitems}
            </header>        
        </>
    )
}


export default Header;



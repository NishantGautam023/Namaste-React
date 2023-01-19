import React from "react";
import logoImage from "../assets/logo.jpg"
import checkoutcart from "../assets/checkout.jpg"
import { Link } from "react-router-dom";

const navitems = (
        <>
                <ul>
                    
                        <Link to="/">
                             <li>Home</li>
                        </Link>
                    

                        <Link to="/about">
                             <li>About</li>
                        </Link>

                        <Link to="/pricing">
                             <li>Pricing</li>
                        </Link>
                    
                    

                </ul>

                <span className="btn-wrap">
                    <Link to="/" className="logo-wrap">
                        <img src={checkoutcart} alt="" height="70" width="70" />
                    </Link>
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



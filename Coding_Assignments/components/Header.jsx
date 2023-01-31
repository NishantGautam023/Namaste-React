import React , {lazy, Suspense,useState,useEffect} from "react";
import logoImage from "../assets/logo.jpg"
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import DarkMode from "./DarkMode";


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



                    <Link to="/faq">
                        <li>FAQ</li>
                    </Link>

                    <ToggleTheme />

                </ul>

                <span className="btn-wrap">

                 </span>
        </>
)


const Header = (props)=> {


    return (
        <> 
             <header className>
                    <Link to="/" className="logo-wrap">
                      <img src={logoImage} alt="" height="70" width="70" />
                    </Link>
                
                {navitems}
                 <DarkMode
                     isDarkMode={props.isDarkMode}
                     toggleDarkMode={props.toggleDarkMode} />
            </header>        
        </>
    )
}


export default Header;



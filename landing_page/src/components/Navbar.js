import React  from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src="logo1.png" alt="logo1"/>
            
            <div className="links">
                 
                <button type="button">Login</button>
                <Link to='/signup'><button type="button"> Get Started</button></Link>
                    
                 
            </div>
        </nav>
     );
}
 
export default Navbar;

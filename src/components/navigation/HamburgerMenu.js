import React from 'react';
import {Link} from "react-router-dom";

const HamburgerMenu = () => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"/>
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/current'>Current Weather</Link></li>
                            <li><Link to='/maps'>Weather Maps</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
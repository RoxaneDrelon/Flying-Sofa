import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header>
            <div className="navbar">
                <img src="/img/windy.png" alt="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Team</Link></li>
                </ul>
            </div>
        </header>
    )
}


export default Header;
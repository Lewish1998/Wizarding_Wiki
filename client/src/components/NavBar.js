import './Style/NavBar.css';
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  

    return(
        <div className='nav-container'>
            <ul className='navbar'>
                <li id='nav-home'><Link to='/'>Home</Link></li>
                <li id='nav-spells'><Link to='/spells'>Spells</Link></li>
                <li id='nav-elixirs'><Link to='/elixirs'>Elixirs</Link></li>
                <li id='nav-ingredients'><Link to='/ingredients'>Ingredients</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;
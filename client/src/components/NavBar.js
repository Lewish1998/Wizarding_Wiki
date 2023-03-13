import './Style/NavBar.css';
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  

    return(
        <div className='nav-container'>
            <ul className='navbar'>
                <li id='nav-home'><Link to='/' className='link'>Home</Link></li>
                <li id='nav-spells'><Link to='/spells' className='link'>Spells</Link></li>
                <li id='nav-elixirs'><Link to='/elixirs' className='link'>Elixirs</Link></li>
                <li id='nav-ingredients'><Link to='/ingredients' className='link'>Ingredients</Link></li>
            </ul>
        </div>
    );
};

export default NavBar;
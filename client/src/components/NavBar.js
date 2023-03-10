import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  

    return(
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/spells'>Spells</Link></li>
            <li><Link to='/elixirs'>Elixirs</Link></li>
            <li><Link to='/ingredients'>Ingredients</Link></li>
        </ul>
    );
};

export default NavBar;
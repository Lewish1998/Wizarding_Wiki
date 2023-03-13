import './Style/NavBar.css';
import React from "react";
import { Link, redirect } from 'react-router-dom';
import SpellType from './SpellPage/SpellList';

const NavBar = () => {
  
    const handleSelect = (e) => {
        if (e.target.value === 'Elixirs'){
            console.log('yes')
            return redirect('/elixirs')
        } else {
            console.log('No')
        }
    }

    // TODO get the spells page to render when selected in the drop down
    // Then work on rendering the types with a select for each select.


    return(
        <nav className='nav-container'>
        
            <ul className='navbar'>
                <li id='nav-home'><Link to='/' className='link'>Home</Link></li>

                {/* <li id='nav-home'><Link to='/spells' className='link'>Spells</Link></li> */}
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Spells</button>
                    <div className='dropdown-content'>
                        <a href='/spells'>All Spells</a>
                    </div>
                </div>
                {/* <li id='nav-elixirs'><Link to='/elixirs' className='link'>Elixirs</Link></li> */}
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Elixirs</button>
                    <div className='dropdown-content'>
                        <a href='/elixirs'>Elixirs</a>
                    </div>
                </div>
            
                <li id='nav-ingredients'><Link to='/ingredients' className='link'>Ingredients</Link></li>
                <li id='nav-houses'><Link to='/houses' className='link'>Houses</Link></li>
            </ul> 
        </nav>
    );
};

export default NavBar;
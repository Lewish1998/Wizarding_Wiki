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


      const ElixirDifficulty = [
        "Unknown",
        "Advanced",
        "Moderate",
        "Beginner",
        "OneOfAKind",
        "OrdinaryWizardingLevel",
        "",
      ];

    return(
        <nav className='nav-container'>
        
            <ul className='navbar'>
                <li id='nav-home'><Link to='/' className='link'>Home</Link></li>

                {/* <li id='nav-home'><Link to='/spells' className='link'>Spells</Link></li> */}
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Spells</button>
                    <div className='dropdown-content'>
                        <a href='/spells'>All Spells</a>
                        <a href='/spells'>Charm</a>
                        <a href='/spells'>Spell</a>
                        <a href='/spells'>Healing</a>
                        <a href='/spells'>Transfiguration</a>
                        <a href='/spells'>DarkCharm</a>
                        <a href='/spells'>Jinx</a>
                        <a href='/spells'>Cures</a>
                        <a href='/spells'>Magical Transportation</a>
                        <a href='/spells'>Conjuration</a>
                        <a href='/spells'>Hex</a>
                    </div>
                </div>
                {/* <li id='nav-elixirs'><Link to='/elixirs' className='link'>Elixirs</Link></li> */}
                <div className='dropdown'>
                <button className='dropdown-button link navbar'>Elixirs</button>
                    <div className='dropdown-content'>
                        <a href='/elixirs'>All Elixirs</a>
                        <a href='/elixirs'>Advanced</a>
                        <a href='/elixirs'>Moderate</a>
                        <a href='/elixirs'>Average</a>
                        <a href='/elixirs'>Beginner</a>
                        <a href='/elixirs'>One of a Kind</a>
                        <a href='/elixirs'>Unknown</a>
                    </div>
                </div>
            
                <li id='nav-ingredients'><Link to='/ingredients' className='link'>Ingredients</Link></li>
                <li id='nav-houses'><Link to='/houses' className='link'>Houses</Link></li>
            </ul> 
        </nav>
    );
};

export default NavBar;
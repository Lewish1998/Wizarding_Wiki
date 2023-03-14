import "./Style/NavBar.css";
import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import SpellType from "./SpellPage/SpellList";

const NavBar = ({ handleSpellChange, getSelectedElixirs, getSpells, getElixirs}) => {
  const SpellType = [
    "Charm",
    "Spell",
    "HealingSpell",
    "Transfiguration",
    "DarkCharm",
    "Jinx",
    "Curse",
    "MagicalTransportation",
    "Conjuration",
    "Hex",
  ];
  const ElixirDifficulty = [
    "Unknown",
    "Advanced",
    "Moderate",
    "Beginner",
    "OneOfAKind",
    "OrdinaryWizardingLevel",
    "",
  ];

  //   <div className='flex-center-top'>
  //   <select onChange={handleChange}>
  //     {SpellType.map((SpellType) => {
  //       return (
  //         <option key={SpellType} value={SpellType}>
  //           {SpellType}
  //         </option>
  //       );
  //     })}
  //   </select>
  //   </div>

  //   fetch("https://wizard-world-api.herokuapp.com/Spells?Type="+type)

  const handleChange = (e) => {
    handleSpellChange(e.target.text);
  };

  const handleAllSpellChange = () => {
    getSpells();
  };

  const handleElixirChange = (e) => {
    getSelectedElixirs(e.target.text);
  };

  const handleAllElixirChange = ()=>{
    getElixirs()
  }

  return (
    <nav className="nav-container">
      <ul className="navbar">
        <li id="nav-home">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <div className="dropdown">
          <button className="dropdown-button link navbar">Spells</button>
          <div className="dropdown-content">
            <Link to="/spells" className="link" onClick={handleAllSpellChange}>
              All Spells
            </Link>
            {SpellType.map((SpellType) => {
              return (
                <Link
                  to="/spells"
                  className="link"
                  key={SpellType}
                  value={SpellType}
                  onClick={handleChange}
                >
                  {SpellType}
                </Link>
              );
            })}
          </div>
        </div>

        {/* <li id='nav-elixirs'><Link to='/elixirs' className='link'>Elixirs</Link></li> */}
        <div className="dropdown">
          <button className="dropdown-button link navbar">Elixirs</button>
          <div className="dropdown-content">
            <Link to="/elixirs" className="link" onClick={getElixirs}>
              All Elixirs
            </Link>
            {ElixirDifficulty.map((difficulty) => {
              return (
                <Link
                  to="/elixirs"
                  className="link"
                  key={difficulty}
                  value={difficulty}
                  onClick={handleElixirChange}
                >
                  {difficulty}
                </Link>
              );
            })}
            {/* // <a href='/elixirs'>All Elixirs</a>
                        // <a href='/elixirs'>Advanced</a>
                        // <a href='/elixirs'>Moderate</a>
                        // <a href='/elixirs'>Average</a>
                        // <a href='/elixirs'>Beginner</a>
                        // <a href='/elixirs'>One of a Kind</a>
                        // <a href='/elixirs'>Unknown</a> */}
          </div>
        </div>

        <li id="nav-ingredients">
          <Link to="/ingredients" className="link">
            Ingredients
          </Link>
        </li>
        <li id="nav-houses">
          <Link to="/houses" className="link">
            Houses
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

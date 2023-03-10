import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import React from 'react';
import NavBar from '../components/NavBar';
import SpellList from '../components/SpellPage/SpellList';
import {useState, useEffect} from 'react';

//APIS
//Spells

const WizardingContainer = () => {
  



const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";

const [spells, setSpells] = useState([]);

useEffect(() => {
  getSpells();
}, [])

const getSpells = () => {
  fetch(spellsAPI)
  .then(r=>r.json())
  .then((data) => {
    setSpells(data)
  });
};
  

    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route  exact path='/' element={<Home />}/>
                <Route exact path='/spells' element={<SpellList spells={spells}/>}/>
            </Routes>
        </Router>
    )
}

export default WizardingContainer;
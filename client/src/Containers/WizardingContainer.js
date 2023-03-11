import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import React from 'react';
import NavBar from '../components/NavBar';
import SpellList from '../components/SpellPage/SpellList';
import {useState, useEffect} from 'react';
import HousesList from '../components/HousesPage/HousesList';

//APIS
//Spells

const WizardingContainer = () => {
  



const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const housesAPI = 'https://wizard-world-api.herokuapp.com/Houses'

const [spells, setSpells] = useState([]);


const [houses, setHouses] = useState([]);

useEffect(() => {
  getSpells();


  getHouses();
}, [])

const getSpells = () => {
  fetch(spellsAPI)
  .then(r=>r.json())
  .then((data) => {
    setSpells(data)
  });
};
  

const getHouses = () => {
  fetch(housesAPI)
  .then(res =>res.json())
  .then((data) =>{
    setHouses(data)
  })
}

    return(
        <Router>
            <NavBar/>
            <Routes>
            <Route  exact path='/' element={<Home />}/>
                <Route exact path='/spells' element={<SpellList spells={spells}/>}/>
                {/* <Route exact path='/elixirs' element={<ElixirsList elixirs={elixirs}/>}/> */}
                {/* <Route exact path='/ingredients' element={<IngredientslList ingredients={ingredients}/>}/> */}
                <Route exact path='/houses' element={<HousesList houses={houses}/>}/></Routes>
        </Router>
    )
}

export default WizardingContainer;
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';

import ElixirsList from '../Components/ElixirsPage/ElixirList';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SpellList from '../Components/SpellPage/SpellList';
import IngredientsList from '../Components/IngredientsPage/IngredientsList'
import HousesList from '../Components/HousesPage/HousesList'

//APIS
//Spells
const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const ingredientsAPI = 'https://wizard-world-api.herokuapp.com/Ingredients'
const elixirsAPI = "https://wizard-world-api.herokuapp.com/Elixirs";

const WizardingContainer = () => {
  

const [spells, setSpells] = useState([]);
const [elixirs,setElixirs] =useState([])
const [ingredients, setIngredients] = useState([])
const [selectedElixir,setSelectedElixir]=useState([])
const [selectedSpellType, setSelectedSpellType] = useState([])


const housesAPI = 'https://wizard-world-api.herokuapp.com/Houses'

const handleSelectedElixir = elixir =>{
  setSelectedElixir(elixir)
}


const [houses, setHouses] = useState([]);

useEffect(() => {
  getSpells();
  getHouses();
  getElixirs(elixirsAPI)
  getIngredients()
}, [])

const getSpells = () => {
  fetch(spellsAPI)
  .then(r=>r.json())
  .then((data) => {
    setSpells(data)
  });
};


const getIngredients = () => {
  fetch(ingredientsAPI)
  .then(r=>r.json())
  .then((data) => {
    setIngredients(data)
  });
};
  
const getElixirs = (url) =>{
  fetch(url)
  .then(result =>result.json())
  .then((data)=>{
    setElixirs(data)
  })
}

const getSelectedElixirs = (difficulty) =>{
  fetch("https://wizard-world-api.herokuapp.com/Elixirs?Difficulty="+difficulty)
  .then(result =>result.json())
  .then((data)=>{
    setElixirs(data)
  })
}

const getSelectedSpells = (type) =>{
  fetch("https://wizard-world-api.herokuapp.com/Spells?Type="+type)
  .then(result =>result.json())
  .then((data)=>{
    setSpells(data)
  })
}

const handleElixirChanges = difficulty =>{
  getSelectedElixirs(difficulty)
}

const handleSpellChange = (type) => {
  getSelectedSpells(type)
}

const getHouses = () => {
  fetch(housesAPI)
  .then(res =>res.json())
  .then((data) =>{
    setHouses(data)
  })
}

    return(
        <Router>
            <NavBar spells={spells} handleSpellChange={handleSpellChange}/>
          <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/spells' element={<SpellList spells={spells} handleSpellChange={handleSpellChange} />}/>
                <Route exact path='/elixirs' element={<ElixirsList elixirs={elixirs} handleElixirChanges={handleElixirChanges}/>}/>
                <Route exact path='/ingredients' element={<IngredientsList ingredients={ingredients}/>}/>
                <Route exact path='/houses' element={<HousesList houses={houses}/>}/>
            </Routes>
        </Router>
    )
}

export default WizardingContainer;
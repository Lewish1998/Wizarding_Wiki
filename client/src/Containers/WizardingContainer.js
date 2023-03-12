import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';
import ElixersList from '../Components/ElixirsPage/ElixirList'
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SpellList from '../Components/SpellPage/SpellList';
import IngredientsList from '../Components/IngredientsPage/IngredientsList';

//APIS
//Spells
const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const ingredientsAPI = 'https://wizard-world-api.herokuapp.com/Ingredients'
const elixirsAPI = "https://wizard-world-api.herokuapp.com/Elixirs";

const WizardingContainer = () => {
  
  
const [spells, setSpells] = useState([]);
const [elixirs,setElixirs] =useState([])
const [ingredients, setIngredients] = useState([])


useEffect(() => {
  getSpells();
  getElixirs()
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
  
const getElixirs = () =>{
  fetch(elixirsAPI)
  .then(result =>result.json())
  .then((data)=>{
    setElixirs(data)
  })
}

    return(
        <Router>
            <NavBar/>
          <Routes>
            <Route  exact path='/' element={<Home />}/>
                <Route exact path='/spells' element={<SpellList spells={spells}/>}/>
                <Route exact path='/elixirs' element={<ElixersList elixirs={elixirs}/>}/>
                <Route exact path='/ingredients' element={<IngredientsList ingredients={ingredients}/>}/>
                {/* <Route exact path='/houses' element={<HousesList houses={houses}/>}/> */}
            </Routes>
        </Router>
    )
}

export default WizardingContainer;
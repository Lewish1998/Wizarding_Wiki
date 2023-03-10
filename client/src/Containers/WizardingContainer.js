import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../components/Home';
import React from 'react';
import NavBar from '../components/NavBar';
import SpellList from '../components/SpellPage/SpellList';
import {useState, useEffect} from 'react';
import IngredientsList from '../components/IngredientsPage/IngredientsList';

//APIS
//Spells
const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const ingredientsAPI = 'https://wizard-world-api.herokuapp.com/Ingredients'

const WizardingContainer = () => {
  
  const [spells, setSpells] = useState([]);
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    getSpells()
    getIngredients()
  }, [])

  const getSpells = () => {
    fetch(spellsAPI)
    .then(r=>r.json())
    .then((data) => {
      setSpells(data)
    })
  }

    const getIngredients = () => {
      fetch(ingredientsAPI)
      .then(r=>r.json())
      .then((data) => {
        setIngredients(data)
      });
    };
  

    return(
        <Router>
            <NavBar/>
            <Routes>
                <Route  exact path='/' element={<Home />}/>
                <Route exact path='/spells' element={<SpellList spells={spells}/>}/>
                {/* <Route exact path='/elixirs' element={<ElixirsList elixirs={elixirs}/>}/> */}
                <Route exact path='/ingredients' element={<IngredientsList ingredients={ingredients}/>}/>
                {/* <Route exact path='/houses' element={<HousesList houses={houses}/>}/> */}
            </Routes>
        </Router>
    )
}

export default WizardingContainer;
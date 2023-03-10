import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import {useState, useEffect} from 'react';
import ElixirsList from '../Components/ElixirsPage/ElixirList';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import SpellList from '../Components/SpellPage/SpellList';
//APIS
//Spells

const WizardingContainer = () => {
  



const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const elixirsAPI = "https://wizard-world-api.herokuapp.com/Elixirs";
const [spells, setSpells] = useState([]);
const [elixirs,setElixirs] =useState([])


useEffect(() => {
  getSpells();
  getElixirs()

}, [])

const getSpells = () => {
  fetch(spellsAPI)
  .then(r=>r.json())
  .then((data) => {
    setSpells(data)
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
                <Route exact path='/elixirs' element={<ElixirsList elixirs={elixirs}/>}/>
                {/* <Route exact path='/ingredients' element={<IngredientslList ingredients={ingredients}/>}/>
                <Route exact path='/houses' element={<HousesList houses={houses}/>}/>  */}
                </Routes>
        </Router>
    )
}

export default WizardingContainer;
import "../theme/container.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import ElixirsList from "../Components/ElixirsPage/ElixirList";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import SpellList from "../Components/SpellPage/SpellList";
import IngredientsList from "../Components/IngredientsPage/IngredientsList";
import HousesList from "../Components/HousesPage/HousesList";

//APIS
//Spells
const spellsAPI = "https://wizard-world-api.herokuapp.com/Spells";
const ingredientsAPI = "https://wizard-world-api.herokuapp.com/Ingredients";
const elixirsAPI = "https://wizard-world-api.herokuapp.com/Elixirs";
const housesAPI = "https://wizard-world-api.herokuapp.com/Houses";

const WizardingContainer = () => {
  // vars for spells etc
  const [spells, setSpells] = useState([]);
  const [elixirs, setElixirs] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedElixir, setSelectedElixir] = useState([]);
  const [selectedSpellType, setSelectedSpellType] = useState([]);
  const [selectedIngredient, setselectedIngredient] = useState(null);
  const [elixirsWithIngredients, setElixirsWithIngredients] = useState([]);
  const [houses, setHouses] = useState([]);

  const handleSelectedElixir = (elixir) => {
    setSelectedElixir(elixir);
  };

  const onIngredientClicked = (ingredient) => {
    setselectedIngredient(ingredient.name.split(" ").join("%20"));
    fetch(
      "https://wizard-world-api.herokuapp.com/Elixirs?Ingredient=" +
        ingredient.name.split(" ").join("%20")
    )
      .then((r) => r.json())
      .then((data) => {
        setElixirsWithIngredients(data);
      });
  };

  useEffect(() => {
    getSpells();
    getHouses();
    getElixirs(elixirsAPI);
    getIngredients();
  }, []);

  const getSpells = () => {
    fetch(spellsAPI)
      .then((r) => r.json())
      .then((data) => {
        setSpells(data);
      });
  };

  const getIngredients = () => {
    fetch(ingredientsAPI)
      .then((r) => r.json())
      .then((data) => {
        setIngredients(data);
      });
  };

  const getElixirs = () => {
    fetch(elixirsAPI)
      .then((result) => result.json())
      .then((data) => {
        setElixirs(data);
      });
  };

  const getSelectedElixirs = (difficulty) => {
    fetch(
      "https://wizard-world-api.herokuapp.com/Elixirs?Difficulty=" + difficulty
    )
      .then((result) => result.json())
      .then((data) => {
        setElixirs(data);
      });
  };

  const getSelectedSpells = (type) => {
    fetch("https://wizard-world-api.herokuapp.com/Spells?Type=" + type)
      .then((result) => result.json())
      .then((data) => {
        setSpells(data);
      });
  };

  const handleElixirChanges = (difficulty) => {
    getSelectedElixirs(difficulty);
  };

  const handleSpellChange = (type) => {
    getSelectedSpells(type);
  };

  const getHouses = () => {
    fetch(housesAPI)
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
      });
  };

  let circle = document.getElementById("blob");
  const onMouseMove = (e) => {
    circle.style.left = e.pageX + "px";
    circle.style.top = e.pageY + "px";
  };
  document.addEventListener("mousemove", onMouseMove);

  return (
    <div>
      <div id="blob">
        <div id="test-div"></div>
      </div>
      <Router>
        <NavBar
          spells={spells}
          handleSpellChange={handleSpellChange}
          getSelectedElixirs={getSelectedElixirs}
          getSpells={getSpells}
          getElixirs={getElixirs}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/spells"
            element={
              <SpellList
                spells={spells}
                handleSpellChange={handleSpellChange}
                handleElixirChanges={handleElixirChanges}
              />
            }
          />
          <Route
            exact
            path="/elixirs"
            element={
              <ElixirsList
                elixirs={elixirs}
                handleElixirChanges={handleElixirChanges}
              />
            }
          />
          <Route
            exact
            path="/ingredients"
            element={
              <IngredientsList
                ingredients={ingredients}
                onIngredientClicked={onIngredientClicked}
                selectedIngredient={selectedIngredient}
                elixirsWithIngredients={elixirsWithIngredients}
              />
            }
          />
          <Route
            exact
            path="/houses"
            element={<HousesList houses={houses} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default WizardingContainer;

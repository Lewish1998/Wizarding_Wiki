import { useState } from "react";
import IngredientItem from "./IngredientsItem";
import IngredientSelector from "./IngredientsSelected";
import '../Style/Spells.css'


const IngredientsList = ({ingredients,onIngredientClicked,selectedIngredient,elixirsWithIngredients}) => {

  const [query, setQuery] = useState("");


    const IngredientsItems = ingredients.sort((a,b) => a.name > b.name ? 1: -1).map((ingredient) => {
      return <IngredientItem ingredient={ingredient} key={ingredient.id} onIngredientClicked={onIngredientClicked}/>
    })

    return (
        <div className='search-bar-container'>
        <h1 className='spell-heading'>Ingredients</h1>
        <div className="flex-center-top">
          <input
            className='search'
            autocapitalize="word"
            type={"text"}
            placeholder="Search Here"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

          <div id='spells-container'>
            {selectedIngredient ? <IngredientSelector selectedIngredient={selectedIngredient} elixirsWithIngredients={elixirsWithIngredients}/>:null}
        {IngredientsItems.filter((list) => {
          if (query === "") {
            return list;
          } else if (list.props.ingredient.name.toLowerCase().includes(query.toLowerCase())) {
            return list;
          }
        })}
        </div>
      </div>





















        // <div id="ingredients">
        //     <h1>Ingredients</h1>

        //     <ul>{IngredientsItems}</ul>
        // </div>
    );
};

export default IngredientsList;
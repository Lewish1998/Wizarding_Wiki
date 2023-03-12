import { useState } from "react";
import IngredientItem from "./IngredientsItem";


const IngredientsList = ({ingredients}) => {

  const [query, setQuery] = useState("");


    const IngredientsItems = ingredients.sort((a,b) => a.name > b.name ? 1: -1).map((ingredient) => {
      return <IngredientItem ingredient={ingredient} key={ingredient.id} />
    })

    return (
        <div>
        <h1>Ingredients</h1>
        <div className="search">
          <input
            autocapitalize="word"
            type={"text"}
            placeholder="Search Here"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
{/*   
        <select onChange={handleChange}>
          {ElixirDifficulty.map((difficulty) => {
            return (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            );
          })}
        </select> */}
        {IngredientsItems.filter((list) => {
          if (query === "") {
            return list;
          } else if (list.props.ingredient.name.includes(query)) {
            return list;
          }
        })}
      </div>





















        // <div id="ingredients">
        //     <h1>Ingredients</h1>

        //     <ul>{IngredientsItems}</ul>
        // </div>
    );
};

export default IngredientsList;
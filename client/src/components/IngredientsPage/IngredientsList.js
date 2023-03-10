import IngredientItem from "./IngredientsItem";

const IngredientsList = ({ingredients}) => {

    // const filmButton = films.sort((a, b) => a.release_date > b.release_date ? 1: -1).map((film, index) => {


    const IngredientsItems = ingredients.sort((a,b) => a.name > b.name ? 1: -1).map((ingredient) => {
      return <IngredientItem ingredient={ingredient} key={ingredient.id} />
    })

    return (
        <div id="ingredients">
            <h1>Ingredients</h1>
            <ul>{IngredientsItems}</ul>
        </div>
    );
};

export default IngredientsList;
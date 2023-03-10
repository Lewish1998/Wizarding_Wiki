import IngredientItem from "./IngredientsItem";

const IngredientsList = ({ingredients}) => {

    const IngredientsItems = ingredients.map((ingredient) => {
      return <IngredientItem ingredient={ingredient} key={ingredient.id} />
    })

    return (
        <div id="ingredients">
            <h1>Ingredients</h1>
            <uL>{IngredientsItems}</uL>
        </div>
    );
};

export default IngredientsList;
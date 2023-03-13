import '../Style/Spells.css'

const IngredientItem = ({ingredient,onIngredientClicked}) => {
  
    const handleClick = () => {
        onIngredientClicked(ingredient)
    }

    return(
        <div id='spell-item'>
            <li onClick={handleClick} value={ingredient}>{ingredient.name}</li>
        </div>
    );
};

export default IngredientItem;
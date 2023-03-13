import '../Style/Spells.css'

const IngredientItem = ({ingredient,onIngredientClicked}) => {
  
    const handleClick = () => {
        onIngredientClicked(ingredient)
    }

    return(
        <div id='spell-item' onClick={handleClick}>
            <li  value={ingredient}>{ingredient.name}</li>
        </div>
    );
};

export default IngredientItem;
import '../Style/Spells.css'

const IngredientItem = ({ingredient}) => {
  
    const handleClick = () => {
      console.log(ingredient)
    }

    return(
        <div id='spell-item'>
            <li onClick={handleClick}>{ingredient.name}</li>
        </div>
    );
};

export default IngredientItem;
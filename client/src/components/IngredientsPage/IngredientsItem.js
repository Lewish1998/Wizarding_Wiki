const IngredientItem = ({ingredient}) => {
  
    const handleClick = () => {
      console.log(ingredient)
    }

    return(
        <div>
            <li onClick={handleClick}>{ingredient.name}</li>
        </div>
    );
};

export default IngredientItem;
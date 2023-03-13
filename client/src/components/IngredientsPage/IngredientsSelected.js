const IngredientSelector = ({ selectedIngredient, elixirsWithIngredients }) => {
  console.log(elixirsWithIngredients);

  const ElixirsWithIngredientsItems = elixirsWithIngredients.map((elixir) => {
    return <div>Used in:<h2><li>{elixir.name}</li></h2> Having the following effect: <br/> <h2>{elixir.effect}</h2> <br/>  </div>;
  });

  return (
    <div>
        <h1>{selectedIngredient.split('%20').join(" ")}</h1>
      <ul> {ElixirsWithIngredientsItems}</ul>
    </div>
  );
};

export default IngredientSelector;

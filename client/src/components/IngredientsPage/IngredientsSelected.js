const IngredientSelector = ({ selectedIngredient, elixirsWithIngredients }) => {

  const ElixirsWithIngredientsItems = elixirsWithIngredients.map((elixir) => {
    return (
      <div>
        Used in:
        <h2>
          <li>{elixir.name}</li>
        </h2>{" "}
        Having the following effect: <br /> <h3><li>{elixir.effect}</li></h3> Other Secondaries: {elixir.ingredients.map((secondaries)=>{
            return (<li>{secondaries.name} <br/></li>)
        })} <br />{" "}
      </div>
    );
  });

  return (
    <div>
      <h1>{selectedIngredient.split("%20").join(" ")}</h1>
      <ul> {ElixirsWithIngredientsItems}</ul>
    </div>
  );
};

export default IngredientSelector;

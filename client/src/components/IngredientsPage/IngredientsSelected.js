import "../Style/Spells.css";
const IngredientSelector = ({ selectedIngredient, elixirsWithIngredients }) => {
  const ElixirsWithIngredientsItems = elixirsWithIngredients.map((elixir) => {
    return (
      <div className="ingredients-info">
        <p>Used in: </p>
        <h2>
          <li>
            <u>{elixir.name}</u>
          </li>
        </h2>{" "}
        Having the following effect: <br />{" "}
        <h3>
          <li>{elixir.effect}</li>
        </h3>{" "}
        Other Secondaries:{" "}
        {elixir.ingredients.map((secondaries) => {
          return (
            <li>
              {secondaries.name} <br />
            </li>
          );
        })}{" "}
        <br />{" "}
      </div>
    );
  });

  return (
    <div className="sticky-container">
      <h1>
        <u>{selectedIngredient.split("%20").join(" ")}</u>
      </h1>
      <ul> {ElixirsWithIngredientsItems}</ul>
    </div>
  );
};

export default IngredientSelector;

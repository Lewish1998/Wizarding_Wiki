import ElixirItem from "./ElixirItem";

const ElixirsList = ({ elixirs, handleElixirChanges }) => {



  const ElixirDifficulty = ['Unknown','Advanced','Moderate','Beginner','OneOfAKind','OrdinaryWizardingLevel'];
//   const difficultySelecter = () => {
//     elixirs.forEach((elixir) => {
//       if (!ElixirDifficulty.includes(elixir.difficulty)) {
//         let { difficulty } = elixir;
//         ElixirDifficulty.push(difficulty);
//       }
//     });
//   };
//   difficultySelecter();

  const ElixirItems = elixirs.map((elixir) => {
    return <ElixirItem elixir={elixir} key={elixir.id} />;
  });
  const handleChange= event=>{
    handleElixirChanges(event.target.value)
  }

  return (
    <div>
      <h1>Elixirs</h1>
      <select onChange={handleChange}>
        {ElixirDifficulty.map((difficulty) => {
          return (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          );
        })}
      </select>
      {ElixirItems}
    </div>
  );
};
export default ElixirsList;

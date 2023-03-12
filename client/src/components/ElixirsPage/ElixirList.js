import { useState } from "react";
import ElixirItem from "./ElixirItem";

const ElixirsList = ({ elixirs, handleElixirChanges }) => {
  const ElixirDifficulty = [
    "Unknown",
    "Advanced",
    "Moderate",
    "Beginner",
    "OneOfAKind",
    "OrdinaryWizardingLevel",
    "",
  ];
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
  const handleChange = (event) => {
    handleElixirChanges(event.target.value);
  };

  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Elixirs</h1>
      <div className="search">
        <input
          autocapitalize="word"

          type={"text"}
          placeholder="Search Here"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <select onChange={handleChange}>
        {ElixirDifficulty.map((difficulty) => {
          return (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          );
        })}
      </select>
      {ElixirItems.filter((list) => {
        if (query === "") {
          return list;
        } else if (list.props.elixir.name.includes(query)) {
          return list;
        }
      })}
    </div>
  );
};
export default ElixirsList;
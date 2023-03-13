
import '../Style/Spells.css'
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

    <div className='search-bar-container'>
      <h1 className='spell-heading'>Elixirs</h1>
      <div className="flex-center-top">
        <input
          autoCapitalize="word"
          className='search'

          type={"text"}
          placeholder="Search Here"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>


    <div className='flex-center-top'>

      <select onChange={handleChange}>
        {ElixirDifficulty.map((difficulty) => {
          return (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          );
        })}
      </select>
      </div>
        <div id='spells-container'>
      {ElixirItems.filter((list) => {
        if (query === "") {
          return <ul id='list-item'>list</ul>;
        } else if (list.props.elixir.name.toLowerCase().includes(query.toLowerCase())) {
          return <ul>list;</ul>
        }
      })}
      </div>
    </div>
  );
};
export default ElixirsList;

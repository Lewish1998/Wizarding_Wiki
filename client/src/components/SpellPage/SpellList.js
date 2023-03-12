
import { useState } from "react";
import SpellItem from "./SpellItem"

const SpellList = ({spells}) => {
  
    const SpellsItems = spells.sort((a,b) => a.name > b.name ? 1: -1).map((spell) => {
      return <SpellItem spell={spell} key={spell.id} />
    })
    const [query, setQuery] = useState("");


    return (
      <div>
        <h1>Spells</h1>
        <div className="search">
          <input
            autocapitalize="word"
            type={"text"}
            placeholder="Search Here"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
  
        <select>
          <option>Insert</option>
          <option>Options</option>
          <option>Here</option>
        </select>
        {/* <select onChange={handleChange}>
          {ElixirDifficulty.map((difficulty) => {
            return (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            );
          })}
        </select> */}
        {SpellsItems.filter((list) => {
          if (query === "") {
            return list;
          } else if (list.props.spell.name.includes(query)) {
            return list;
          }
        })}
      </div>









      
        // <div>
        // <h1>Spells</h1>
        // <p>Will take in spells as a paramater and create and return a variable which will return mapped spells</p>
        // <div id='spell-items'>{SpellsItems}</div>
        // </div>
    )
}

export default SpellList;
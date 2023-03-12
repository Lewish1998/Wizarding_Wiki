
import { useState } from "react";
import SpellItem from "./SpellItem"

const SpellList = ({spells, handleSpellChange}) => {

  const SpellType = [
    'Charm',
    'Spell',
    'HealingSpell',
    'Transfiguration',
    'DarkCharm',
    'Jinx',
    'Cures',
    'MagicalTransportation',
    'Conjuration',
    'Hex'
  ]

    const SpellsItems = spells.sort((a,b) => a.name > b.name ? 1: -1).map((spell) => {
      return <SpellItem spell={spell} key={spell.id} />
    })
    const [query, setQuery] = useState("");



    const handleChange = (e) => {
      handleSpellChange(e.target.value)
      console.log(e.target.value)
    }



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
        <select onChange={handleChange}>
          {SpellType.map((SpellType) => {
            return (
              <option key={SpellType} value={SpellType}>
                {SpellType}
              </option>
            );
          })}
        </select>

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
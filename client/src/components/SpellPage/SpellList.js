import '../Style/Spells.css'
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
    const [type, setType] = useState('')



    const handleChange = (e) => {
      handleSpellChange(e.target.value)
      setType(e.target.value)
      console.log(`Type: ${type}`)

    }



    return (
      <div className='search-bar-container'>
        <h1 className='spell-heading'>Spells</h1>
        <div className="flex-center-top">
          <input
            autoCapitalize="word"
            type={"text"}
            placeholder="Search Here"
            onChange={(event) => setQuery(event.target.value)}
          />

        </div>
        <div className='flex-center-top'>
        <select onChange={handleChange}>
          {SpellType.map((SpellType) => {
            return (
              <option key={SpellType} value={SpellType}>
                {SpellType}
              </option>
            );
          })}
        </select>
        </div>


          <div id='spells-container'>
        {SpellsItems.filter((list) => {
          if (query === "") {
            return <ul id='list-item'>list</ul>;
          } else if (list.props.spell.name.includes(query)) {
            return <ul>list</ul>;
          }
        })}
        </div>
      </div>









      
        // <div>
        // <h1>Spells</h1>
        // <p>Will take in spells as a paramater and create and return a variable which will return mapped spells</p>
        // <div id='spell-items'>{SpellsItems}</div>
        // </div>
    )
}

export default SpellList;
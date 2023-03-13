import '../Style/Spells.css'
import { useState } from "react";
import SpellItem from "./SpellItem"


const SpellList = ({spells, handleSpellChange, charm}) => {

  const SpellType = [
    'Charm',
    'Spell',
    'HealingSpell',
    'Transfiguration',
    'DarkCharm',
    'Jinx',
    // 'Curses',
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
      console.log(charm)
    }

    return (
      <div className='search-bar-container'>
        <h1 className='spell-heading'>Spells</h1>
        <div className="flex-search">
          <input
            className='search'
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
          } else if (list.props.spell.name.toLowerCase().includes(query.toLowerCase())) {
            return <ul>list</ul>;
          }
        })}
        </div>
      </div>
    )
}

export default SpellList;
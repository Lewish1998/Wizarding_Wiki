
import SpellItem from "./SpellItem"

const SpellList = ({spells}) => {
  
    const SpellsItems = spells.sort((a,b) => a.name > b.name ? 1: -1).map((spell) => {
      return <SpellItem spell={spell} key={spell.id} />
    })

    return (
        <div>
        <h1>Spells</h1>
        <p>Will take in spells as a paramater and create and return a variable which will return mapped spells</p>
        <div id='spell-items'>{SpellsItems}</div>
        </div>
    )
}

export default SpellList;
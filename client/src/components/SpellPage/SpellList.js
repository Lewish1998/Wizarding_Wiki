import SpellItem from "./SpellItem"

const SpellList = ({spells}) => {
  
    const SpellsItems = spells.map((spell) => {
      return <SpellItem spell={spell} key={spell.id} />
    })

    return (
        <div>
        <h1>Spells</h1>
        <p>Will take in spells as a paramater and create and return a variable which will return mapped spells</p>
        {SpellsItems}
        </div>
    )
}

export default SpellList;
import '../Style/Spells.css'

const SpellItem = ({spell}) => {
  

return(
    <div id="spell-item">
        <li>{spell.name}</li>
        <li><b>INCANTATION </b>{spell.incantation}</li>
        <li>EFFECT {spell.effect}</li>
        <li>TYPE {spell.type}</li>
        <li>LIGHT {spell.light}</li>
    </div>
)
}

export default SpellItem

const SpellItem = ({spell}) => {
  

return(
    <div id="spell-item">
        <ul>
        <li>NAME {spell.name}</li>
        <li>INCANTATION {spell.incantation}</li>
        <li>EFFECT {spell.effect}</li>
        <li>TYPE {spell.type}</li>
        <li>LIGHT {spell.light}</li>
        </ul>
    </div>
)
}

export default SpellItem
import React, { useState } from 'react'
import '../Style/Spells.css'

const SpellItem = ({spell}) => {

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

return(
    <div id="spell-item" onClick={toggle}>
        <h3>{spell.name}</h3>
        {open &&
        <div id='spell-item-box'>
        { spell.incantation ? <li><b>Incantation: </b>{spell.incantation}</li> : <li><b>Incantation:</b> Non-Verbal</li>}
        {spell.effect ? <li><b>Effect: </b>{spell.effect}</li> : <li><b>Effect:</b> Unknown</li>}
        <li><b>Type: </b>{spell.type}</li>
        <li><b>Light: </b>{spell.light}</li>
        </div>
        }
    </div>
)
}

export default SpellItem;
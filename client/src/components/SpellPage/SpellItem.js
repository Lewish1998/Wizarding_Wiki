import React, { useState } from 'react'
import '../Style/Spells.css'

const SpellItem = ({spell}) => {

    const [open, setOpen] = useState(false)

    const toggle= () => {
        setOpen(!open)
    }

return(
    <div id="spell-item">
        <p onClick={toggle}>{spell.name}</p>
        {open &&
        <div>
        <li><b>INCANTATION </b>{spell.incantation}</li>
        <li>EFFECT {spell.effect}</li>
        <li>TYPE {spell.type}</li>
        <li>LIGHT {spell.light}</li>
        </div>
        }
    </div>
)
}

export default SpellItem;
import React, { useState } from 'react'
import '../Style/Spells.css'

const SpellItem = ({spell}) => {

    const [open, setOpen] = useState(false)

    const toggle= () => {
        setOpen(!open)
    }

return(
    <div id="spell-item" onClick={toggle}>
        <b>{spell.name}</b>
        {open &&
        <div>
        <li><b>Incantation: </b>{spell.incantation}</li>
        <li><b>Effect: </b>{spell.effect}</li>
        <li><b>Type: </b>{spell.type}</li>
        <li><b>Light: </b>{spell.light}</li>
        </div>
        }
    </div>
)
}

export default SpellItem;
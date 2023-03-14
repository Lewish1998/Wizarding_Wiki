import React, { useState } from 'react'
import '../Style/Spells.css'

const ElixirItem = ({elixir})=>{

    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

return(
    <div id="spell-item" onClick={toggle}>
        <h3>{elixir.name}</h3>
        {open &&
        <div>
            {elixir.effect ? <li><b>Effect:</b> {elixir.effect}</li> : <li><b>Effect:</b> Unknown</li>}
            {elixir.sideEffects ? <li><b>Side Effect:</b> {elixir.sideEffects}</li> : <li><b>Side Effect:</b> Unknown</li>}
            {elixir.time ?<li><b>Time:</b> {elixir.time}</li>: <li><b>Time:</b> Unknown</li>}
            {elixir.characteristics ? <li><b>Characteristics:</b> {elixir.characteristics}</li> : <li><b>Characteristics:</b> Unknown</li>}
            <li><b>Difficulty:</b> {elixir.difficulty}</li>
        </div>
        }
    </div>
)


}


export default ElixirItem

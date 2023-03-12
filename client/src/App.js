import WizardingContainer from "./Containers/WizardingContainer"
import sound from './theme/theme.mp3'
import { useEffect, useState } from "react"

const App = () => {
  
    function play(){
        new Audio(sound).play()
    }

    return(
        <div>
            <button onClick={play}>play</button>
            <WizardingContainer/>
        </div>
    )
}

export default App;
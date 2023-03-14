import React, {useState} from 'react';
import HouseDetails from './HouseDetails';
import HouseSelector from './HouseSelector';
import '../Style/Spells.css'

const HousesList = ({houses}) => {

    const [selectedHouse, setSelectedHouse] = useState(null)


    const onHouseSelected = (house) => {
        setSelectedHouse(house)
    }

    console.log(selectedHouse)

    return (
    <div >
        <h1>Houses:</h1>
        <HouseSelector houses={houses} onHouseSelected={onHouseSelected}/>
        {selectedHouse ? <HouseDetails house={selectedHouse} /> : <img className='parent-crest' require src={require('./HogwartsCOA.png')} />}
    </div>
    )
};

export default HousesList;

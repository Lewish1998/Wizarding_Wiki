import React, {useState} from 'react';
import HouseDetails from './HouseDetails';
import HouseSelector from './HouseSelector';
import '../Style/Spells.css'

const HousesList = ({houses}) => {

    const [selectedHouse, setSelectedHouse] = useState(null)


    const onHouseSelected = (house) => {
        setSelectedHouse(house)
    }

    return (
    <div >
        <h1 className='spell-heading'>Houses</h1>
        <HouseSelector className='house-wdropdown' houses={houses} onHouseSelected={onHouseSelected}/>
        {selectedHouse ? <HouseDetails house={selectedHouse} /> : <img className='parent-crest' require src={require('./houseImages/HogwartsCOA.png')} />}
    </div>
    )
};

export default HousesList;

import React, {useState} from 'react';
import HouseDetails from './HouseDetails';
import HouseSelector from './HouseSelector';

const HousesList = ({houses}) => {

    const [selectedHouse, setSelectedHouse] = useState(null)


    const onHouseSelected = (house) => {
        setSelectedHouse(house)
    }

    return (
    <div>
        <h1>Houses:</h1>
        <HouseSelector houses={houses} onHouseSelected={onHouseSelected}/>
        {selectedHouse ? <HouseDetails house={selectedHouse} /> : <img require src={require('./HogwartsCOA.png')}/>}
    </div>
    )
};

export default HousesList;

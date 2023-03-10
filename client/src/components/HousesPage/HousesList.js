import React, {useState} from 'react';
import HousesItem from './HousesItem';

const HousesList = ({houses}) => {

    const [selectedHouse, setSelectedHouse] = useState([])

    const HousesItem = selectedHouse.map((house) => {
        return <option><HousesItem house={house} key={house.id}/></option>
    })

    const handleSelectChange = (event) => {
        setSelectedHouse(event.target.value)
        console.log(selectedHouse)
    }

    return (
    <div>
        <h2>Hooses:</h2>
        <select onChange={handleSelectChange}>
            {houses.map((house) => {
                return <option value={house}>{house.name}</option>
            })}
        </select>

        {HousesItem}

    </div>
    )
};

export default HousesList;
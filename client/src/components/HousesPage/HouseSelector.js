import React from 'react';
import HousesItem from './HousesItem';

const HouseSelector = ({houses, onHouseSelected}) => {

    const handleChange = (event) => {
        onHouseSelected(houses[event.target.value]);
    }

    const houseOptions = houses.map((house, index) => {
        return <HousesItem key={index} house={house} index={index}/>
    })

    return (
        <div className="flex-center-top select-padding">
        <select  defaultValue='' onChange={handleChange}>
            <option value=''>Select House</option>
                {houseOptions}
        </select>
        </div>
    )
};

export default HouseSelector;
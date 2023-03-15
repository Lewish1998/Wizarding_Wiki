import React, { useState } from 'react';
import HousesItem from './HousesItem';


const HouseSelector = ({houses, onHouseSelected}) => {


    const [houseName, setHouseName] = useState('')


    const handleChange = (event) => {
        onHouseSelected(houses[event.target.value]);
        setHouseName(houses[event.target.value].name)
        }


    

    const houseOptions = houses.map((house, index) => {
        return <HousesItem key={index} house={house} index={index}/>
    })

    return (
        <div className="flex-center-top select-padding">
        <select className='select-padding' defaultValue='' onChange={handleChange}>
            <option value=''>Select House</option>
                {houseOptions}
        </select>
        </div>
    )
};

export default HouseSelector;
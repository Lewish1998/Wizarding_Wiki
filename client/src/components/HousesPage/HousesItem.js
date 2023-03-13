import React from 'react';

const HousesItem = ({index, house}) => {

    return (
        <option value={index}>{house.name}</option>
    )
};

export default HousesItem;
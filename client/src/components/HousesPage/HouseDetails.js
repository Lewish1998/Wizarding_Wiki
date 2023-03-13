import React from 'react';

const HouseDetails = ({house}) => {

    const houstTraits = house.traits.map((trait, index) => {
        return `${trait.name} `
    })
    
    return (
    <div>
        <p>Name: {house.name}</p>
        <p>Head of House: {house.heads[0]['firstName']} {house.heads[0]['lastName']} </p>
        <p>House Colours: {house.houseColours}</p>
        <p>Common Room: {house.commonRoom}</p>
        <p>Founder: {house.founder}</p>
        <p>Ghost: {house.ghost}</p>
        <p>Animal: {house.animal}</p>
        <p>Element: {house.element}</p>
        <p>House Traits: {houstTraits}</p>
    </div>
    )
};

export default HouseDetails;
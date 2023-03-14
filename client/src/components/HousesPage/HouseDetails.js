import React from 'react';
import '../Style/Spells.css'

const HouseDetails = ({house}) => {

    const houstTraits = house.traits.map((trait, index) => {
        return `${trait.name} `
    })
    
    return (
    <div >
        <h1><u>{house.name}</u></h1><br/>
        {house.name='gryffindor'? <img require src={require('./gryffindor.png')}/>: <p>haloo</p>}
        <div id='spell-item'>
        <p>One of the four founding houses of Hogwarts initially sponsored by {house.founder}.</p>
        <p>The students of this house continue to embody the traits of {houstTraits} that they were known for.</p>
        <p>Their house colours of {house.houseColours} and the {house.animal} are reflected in their coat of arms.</p>
        <p>The current head of house is {house.heads[0]['firstName']} {house.heads[0]['lastName']} and the common room in the  {house.commonRoom} is watched over by the ghost  {house.ghost}. 
        </p>
        </div>

    </div>
    )
};

export default HouseDetails;
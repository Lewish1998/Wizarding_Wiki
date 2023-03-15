import React from "react";
import "../Style/Spells.css";
import "../Style/House.css";

const HouseDetails = ({ house }) => {
  const houseTraits = house.traits.map((trait, index) => {
    return `${trait.name} `;
  });

  return (
    <div>
      <div className="top-left">
        <h1>
          <u>{house.name}</u>
        </h1>
        <div id="house-item">
          <p id="text-box-house">
            One of the four founding houses of Hogwarts initially sponsored by{" "}
            {house.founder}.<br></br>
            <br></br>
            The students of this house continue to embody the traits of{" "}
            {houseTraits} that they were known for.<br></br>
            <br></br>
            Their house colours of {house.houseColours} and the {house.animal}{" "}
            are reflected in their coat of arms.<br></br>
            <br></br>
            The current head of house is {house.heads[0]["firstName"]}{" "}
            {house.heads[0]["lastName"]} and the common room in the{" "}
            {house.commonRoom} is watched over by the ghost {house.ghost}.
          </p>
        </div>
      </div>
      {house ? (
        <img
          className="top-right"
          require
          src={require(`./houseImages/${house.name.toLowerCase()}.png`)}
        />
      ) : null}
      <div id="image-shadow"></div>
    </div>
  );
};

export default HouseDetails;

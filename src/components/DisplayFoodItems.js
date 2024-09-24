import React from "react";
import FoodItem from "./FoodItem";
import Accordion from "react-bootstrap/Accordion";

const DisplayFoodItems = ({ items }) => {
  return (
    <Accordion>
      {items.map((food,index) => {
        return (
          <Accordion.Item eventKey={index} key={index}>
            <FoodItem food={food} />
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
export default DisplayFoodItems;

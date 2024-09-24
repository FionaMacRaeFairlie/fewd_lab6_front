import React from "react";
import useFetchData from "./useFetchData";
import DisplayFoodItems from "./DisplayFoodItems";

const DisplayFoodMenu = () => {
  const { status, foods } = useFetchData();
  if (status === "fetched")
    return (
      <div>
        {/* code to display food items here */}
        <DisplayFoodItems items = {foods}/>
      </div>
    );
  return <p>There is currently an issue displaying the food menu</p>;
};

export default DisplayFoodMenu;

import React from "react";
import NewArrival from "./NewArrival";

const Categories = ({ targetRef }) => {
  return (
    <div ref={targetRef}>
      <NewArrival />
    </div>
  );
};

export default Categories;

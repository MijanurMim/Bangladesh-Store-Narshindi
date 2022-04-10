import React from "react";

const PriceData = ({ item }) => {
  return (
    <p>
      {item.name} {item.price}
    </p>
  );
};

export default PriceData;

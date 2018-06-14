import React from 'react';

const Dish = (props) => {
  const { dish: { name, description, price }} = props;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{description}</h3>
      <h3>${price}</h3>
    </div>
  )
}

export default Dish;
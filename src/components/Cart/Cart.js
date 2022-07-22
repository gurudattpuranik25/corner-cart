import React from "react";

function Cart({ itemArray }) {
  return (
    <div>
      {itemArray.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
}

export default Cart;

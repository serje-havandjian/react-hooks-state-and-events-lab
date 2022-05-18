import React, { useState } from "react";

function Item({ name, category }) {

  const [cartItem, ItemAdder] = useState("not-cart")
  const changeCartItem = cartItem ? "in-cart" : "not-cart"


  const [buttonStatus, ButtonChanger] = useState("add")
  const changeButton = buttonStatus ? "remove" : "add"


  function addItemFunction(){
    ItemAdder(changeCartItem)
    ButtonChanger(changeButton)
    }

  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonStatus} onClick={addItemFunction}>Add to Cart</button>
    </li>
  );
}

export default Item;

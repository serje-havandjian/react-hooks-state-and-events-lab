import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const foods = items.map((item)=>{
    return item.name
  })

  console.log(foods)

  const [selectedCategory, changeCategory] = useState("All")

  changeCategory(event.target.value)

  function handleSelect(){
    changeCategory( foodsToDisplay = foods.filter((food)=>{
        if (selectedCategory === "All"){
          return true
        } else{
          return food.category
        }
      })
    )
  }



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
        <li>{foodsToDisplay}</li>
      </ul>
    </div>
  );
}

export default ShoppingList;

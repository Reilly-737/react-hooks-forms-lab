import React, {useState} from "react";
import Item from "./Item";
import items from "../data/items";

function Filter({onCategoryChange}) {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    const categoryMatch =
     selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  })

  return (
    <div className="Filter">
      <input 
      type="text" 
      name="search" 
      placeholder="Search..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      />
      <select 
      name="filter" 
      onChange={(e) => {
        setSelectedCategory(e.target.value);
        onCategoryChange(e.target.value);
      }}
      value={selectedCategory}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Item name={item.name} category={item.category}/></li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;

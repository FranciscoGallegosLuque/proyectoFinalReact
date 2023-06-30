import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  let { categoryId } = useParams();

  let filteredItems = items.filter((item) => {
    return item.category === categoryId;
  });

  useEffect(() => {
    axios("https://dummyjson.com/products").then((json) =>
      setItems(json.data.products)
    );
  }, []);

  console.log(categoryId);

  const itemsList = categoryId ? filteredItems : items;

  return (
    <div className="itemsList">
      {itemsList.map((item) => {
        return (
          <div style={{ margin: 10 }} key={item.id}>
            <Link to={`/item/${item.id}`}>
              <Item item={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;

// .then((json) => setItems(json.data.results));

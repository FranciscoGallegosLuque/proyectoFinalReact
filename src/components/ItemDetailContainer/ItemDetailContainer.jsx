import React from "react";
import { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import axios from "axios";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  let { id } = useParams();

  const [item, setItem] = useState([
    axios(`https://dummyjson.com/products/${id}`).then((json) => {
      json.data;
    }),
  ]);

  useLayoutEffect(() => {
    axios(`https://dummyjson.com/products/${id}`).then((json) => {
      setItem(json.data);
    });
  }, [id]);

  async function hola() {
    const image = await item.images[0];
  }

  return (
    <div className="mainDetail">
      <img src={item.images ? item.images[0] : null} alt="" />
      <div className="textDetail">
        <div className="titleDetail">{item.title}</div>
        <div className="descDetail">{item.description}</div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;

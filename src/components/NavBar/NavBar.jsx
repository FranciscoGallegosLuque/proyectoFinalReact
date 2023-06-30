import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import img from "./logo.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <div className="imageContainer">
        <Link to="/">
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="optionsContainer">
        <Link className="option" to="/category/smartphones">
          <div>Celulares</div>
        </Link>
        <Link className="option" to="/category/laptops">
          <div>Laptops</div>
        </Link>
        <Link className="option" to="/category/fragrances">
          <div>Perfumes</div>
        </Link>
        <Link className="option" to="/category/skincare">
          <div>Cremas</div>
        </Link>
        <Link className="option" to="/category/groceries">
          <div>Alimentos</div>
        </Link>
        <Link className="option" to="/category/home-decoration">
          <div>Deco</div>
        </Link>
      </div>
      <div className="iconContainer">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;

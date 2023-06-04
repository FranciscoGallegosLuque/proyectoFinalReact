import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import img from "./logo.png"

export const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='imageContainer'>
        <img src={img} alt="" />
      </div>
      <div className='optionsContainer'>
        <div className='option'>Ofertas</div>
        <div className='option'>Historial</div>
        <div className='option'>Supermercado</div>
        <div className='option'>Moda</div>
        <div className='option'>Vender</div>
        <div className='option'>Ayuda</div>
      </div>
      <div className='iconContainer'><CartWidget/></div>
    </div>
  )
}

export default NavBar
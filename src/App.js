import { useState } from "react";
import Cart from "./Cart";
export default function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <div>
        <nav className="navv">
        <div className="navbar">
          <a href="#" onClick={() => setNavIsOpen(!navIsOpen)}><img src="./images/icon-menu.svg" alt="icon" className="menu" /></a>
          {navIsOpen && <div className="navbar1">
            <a href="#" onClick={() => setNavIsOpen(!navIsOpen)}><img src="./images/icon-close.svg" alt="icon" className="close" /></a>
            <a href="#"><img src="./images/logo.svg" alt="icon" className="Sneakers1" /></a>
            <a href="#" className="Collections1">Collections</a>
            <a href="#first" className="Men1">Men</a>
            <a href="#second" className="Women1">Women</a>
            <a href="#" className="About1">About</a>
            <a href="#" className="Contact1">Contact</a>
        </div>}
          <a href="#"><img src="./images/logo.svg" alt="icon" className="Sneakers" /></a>
          <a href="#" className="Collections">Collections</a>
          <a href="#first" className="Men">Men</a>
          <a href="#second" className="Women">Women</a>
          <a href="#" className="About">About</a>
          <a href="#" className="Contact">Contact</a>
        </div>
        <div className="nav">
          <a href="#" onClick={() => setCartIsOpen(!cartIsOpen)}><img src="images/icon-cart.svg" alt="icon" className="iconCart" /></a>
          {cartIsOpen && <Cart />}
          <img src="images/image-avatar.png" alt="icon" className="imageAvatar" />
        </div>
      </nav>
    </div>
  )
}
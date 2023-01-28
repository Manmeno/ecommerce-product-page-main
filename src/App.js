import React, { Component } from "react";
class App extends Component {
  render() {
    
    return <div>
      <nav className="navv">
        <div className="navbar">
          <a href="#"><img src="./images/logo.svg" alt="icon" className="Sneakers" /></a>
          <a href="#" className="Collections">Collections</a>
          <a href="#" className="Men">Men</a>
          <a href="#" className="Women">Women</a>
          <a href="#" className="About">About</a>
          <a href="#" className="Contact">Contact</a>
        </div>
        <div className="nav">
          <a href="#"><img src="images/icon-cart.svg" alt="icon" className="iconCart" /></a>
          <img src="images/image-avatar.png" alt="icon" className="imageAvatar" />
        </div>
      </nav>
      <hr className='hr' />
    </div>
}
}
export default App;
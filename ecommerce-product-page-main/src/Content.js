import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel'
import EmblaCarousel1 from './js/EmblaCarousel1'
import './css/base1.css'
import './css/sandbox1.css'
import './css/embla1.css'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
const OPTIONS = {}
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const OPTIONS1 = {}
const SLIDE_COUNT1 = 4
const SLIDES1 = Array.from(Array(SLIDE_COUNT1).keys())
class Content extends Component {
  state = {
    x : 0,
    total : 125
  };
      render(){
      return <div>
        <nav className="navv">
        <div className="navbar">
          <a href="#"><img src="./images/icon-menu.svg" alt="icon" className="menu" /></a>
          <a href="#"><img src="./images/logo.svg" alt="icon" className="Sneakers" /></a>
          <a href="#" className="Collections">Collections</a>
          <a href="#" className="Men">Men</a>
          <a href="#" className="Women">Women</a>
          <a href="#" className="About">About</a>
          <a href="#" className="Contact">Contact</a>
        </div>
        <div className="navbar1">
          <a href="#"><img src="./images/icon-close.svg" alt="icon" className="close" /></a>
          <a href="#"><img src="./images/logo.svg" alt="icon" className="Sneakers1" /></a>
          <a href="#" className="Collections1">Collections</a>
          <a href="#" className="Men1">Men</a>
          <a href="#" className="Women1">Women</a>
          <a href="#" className="About1">About</a>
          <a href="#" className="Contact1">Contact</a>
        </div>
        <div className="nav">
          <a href="#"><img src="images/icon-cart.svg" alt="icon" className="iconCart" /></a>
          <div id="prod">
            <div className="tit">
              <p className="subtit">Cart</p>
              <hr />
            </div>
            <div id="sub-prod">
              <div className="prod2">
              <img src="./images/image-product-1-thumbnail.jpg" className='test' alt="icon" /> <small> Fall Limited Edition Sneakers </small> <img src="./images/icon-delete.svg" className="delete" alt="icon" />
              <small className='total'>$125.00 X {this.state.x}</small> <br />
              </div>
                  <button className='btn'>Checkout</button>
            </div>
            <div id="sub-prod">
              <div className="prod2">
              <img src="./images/image-product-1-thumbnail.jpg" className='test' alt="icon" /> <small> Fall Limited Edition Sneakers </small> <img src="./images/icon-delete.svg" className="delete" alt="icon" />
              <small className='total'>$125.00 X {this.state.x}</small> <br />
              </div>
                  <button className='btn'>Checkout</button>
            </div>
          </div>
          <img src="images/image-avatar.png" alt="icon" className="imageAvatar" />
        </div>
      </nav>
      <hr className='hr' />
      <div className="Content">
          <main className="sandbox">
            <section className="sandbox__carousel">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
          </main>

          <main className="sandbox1">
            <section className="sandbox__carousel1">
              <EmblaCarousel1 slides={SLIDES1} options={OPTIONS1} />
            </section>
          </main>

          <div className="inf">
          <p className="SneakerCompany">Sneaker Company</p> <br />
          <p className="limited">Fall Limited Edition Sneakers</p> <br />
          <p className="low">
          These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$125.00  <span className="discount">50%</span></p>
          <p className="price2"><del>$250.00</del></p>
          <div className="counter">
          <button className="minus" onClick={()=>{this.setState({x:this.state.x-1})}}><img src="./images/icon-minus.svg" alt="icon" /></button>
          <p className="count">{this.state.x}</p>
          <button className="plus" onClick={()=>{this.setState({x:this.state.x+1})}}><img src="./images/icon-plus.svg" alt="icon" /></button>
          <button className="btn" onClick={()=>{
          let price = this.state.x * this.state.total
          console.log(price)
          
          }}><img src="./images/icon-cart.svg" alt="icon" className="iconcart" /> <span className="btnCart">Add to cart</span></button>
          </div>
        </div>
      </div> 
      </div>
    }
      }
export default Content;
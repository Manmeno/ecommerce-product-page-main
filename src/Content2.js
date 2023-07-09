import React, { Component } from 'react';
import EmblaCarousel2 from './js/EmblaCarousel2'
import './css/base2.css'
import './css/sandbox2.css'
import './css/embla.css'
const OPTIONS2 = {}
const SLIDE_COUNT2 = 4
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
class Content2 extends Component {
  state = {
    x : 0,
    total : 125
  };
  render() {
    return (
      <div>
              <div className="Content">
          <main className="sandbox2">
            <section className="sandbox__carousel2">
              <EmblaCarousel2 slides={SLIDES2} options={OPTIONS2} />
            </section>
          </main>

          <div className="inf">
          <p className="SneakerCompany">NIKE AIR</p> <br />
          <p className="limited">Nike AIR Jordan 2021</p> <br />
          <p className="low">
          These Nike Air are your perfect casual wear companion.Featuring a durable rubber outer sole. theyll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$225.00  <span className="discount">50%</span></p>
          <p className="price2"><del>$325.00</del></p>
          <div className="counter">
          <button className="minus" onClick={()=>{this.setState({x:this.state.x-1})}}><img src="./images/icon-minus.svg" alt="icon" /></button>
          <p className="count">{this.state.x}</p>
          <button className="plus" onClick={()=>{this.setState({x:this.state.x+1})}}><img src="./images/icon-plus.svg" alt="icon" /></button>
          <button className="btn"><img src="./images/icon-cart.svg" alt="icon" className="iconcart" /> <span className="btnCart">Add to cart</span></button>
          </div>
        </div>
      </div> 
      </div>
    );
  }
}

export default Content2;
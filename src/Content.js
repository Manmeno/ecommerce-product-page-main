import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel'
import EmblaCarousel1 from './js/EmblaCarousel1'
import './css/base1.css'
import './css/sandbox1.css'
import './css/base.css'
import './css/sandbox.css'
import './css/embla.css'
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
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
      <br />
      <h2 className="Men-Title" id="first">Men Shoes</h2>
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
      <div className="content2">
      <Content2 />
      </div>
      <div className="content3">
      <Content3 />
      </div>
      <h2 className='Men-Title' id="second">Women Shoes</h2>
      <div className="content4">
        <Content4 />
      </div>
      <div className="content5">
        <Content5 />
      </div>
      <div className="content6">
        <Content6 />
      </div>
      </div>
    }
      }
export default Content;
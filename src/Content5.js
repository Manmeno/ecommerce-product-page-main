import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel5'
import './css/base5.css'
import './css/sandbox5.css'
import './css/embla.css'
const OPTIONS5 = {}
const SLIDE_COUNT5 = 4
const SLIDES5 = Array.from(Array(SLIDE_COUNT5).keys())
class Content5 extends Component {
  state = {
    x : 0,
    total : 125
  };
  render(){
    return <div>
      <div className="Content">
          <main className="sandbox3">
            <section className="sandbox__carousel3">
              <EmblaCarousel slides={SLIDES5} options={OPTIONS5} />
            </section>
          </main>
          <div className="inf">
          <p className="SneakerCompany">DURA SHOES LTD</p> <br />
          <p className="limited">Dura 2022 Girls Shoe Outdoor</p> <br />
          <p className="low">
          These Dura 2022 Girls shoe outdoor are your perfect casual wear companion.Featuring a durable rubber outer sole. theyll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$194.00  <span className="discount">50%</span></p>
          <p className="price2"><del>$200.99</del></p>
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
export default Content5;
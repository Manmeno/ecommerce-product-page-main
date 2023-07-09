import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel4'
import './css/base4.css'
import './css/sandbox4.css'
import './css/embla.css'
const OPTIONS4 = {}
const SLIDE_COUNT4 = 4
const SLIDES4 = Array.from(Array(SLIDE_COUNT4).keys())
class Content4 extends Component {
  state = {
      x : 0,
      total : 125
    };
    render(){
    return <div>
      <div className="Content">
          <main className="sandbox4">
            <section className="sandbox__carousel4">
              <EmblaCarousel slides={SLIDES4} options={OPTIONS4} />
            </section>
          </main>
          <div className="inf">
          <p className="SneakerCompany">ZUZZA PLC</p> <br />
          <p className="limited">ZUZZA 2022 Girls Shoe Outdoor</p> <br />
          <p className="low">
          These ZUZZA 2022 Girls shoe outdoor are your perfect casual wear companion.Featuring a durable rubber outer sole. theyll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$$225  <span className="discount">50%</span></p>
          <p className="price2"><del>$195.99</del></p>
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
export default Content4;
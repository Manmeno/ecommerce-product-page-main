import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel3'
import './css/base3.css'
import './css/sandbox3.css'
import './css/embla.css'
const OPTIONS3 = {}
const SLIDE_COUNT3 = 4
const SLIDES3 = Array.from(Array(SLIDE_COUNT3).keys())
class Content3 extends Component {
  state = {
    x : 0,
    total : 125
  };
  render(){
    return <div>
      <div className="Content">
          <main className="sandbox3">
            <section className="sandbox__carousel3">
              <EmblaCarousel slides={SLIDES3} options={OPTIONS3} />
            </section>
          </main>
          <div className="inf">
          <p className="SneakerCompany">JORDAN X</p> <br />
          <p className="limited">Jordan New 2021 Brand</p> <br />
          <p className="low">
          These Jordan x shoes are your perfect sport and casual wear companion.Featuring a durable rubber outer sole. theyll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$625.00  <span className="discount">50%</span></p>
          <p className="price2"><del>$1225.00</del></p>
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
export default Content3;
import React, { Component} from 'react'
import EmblaCarousel from './js/EmblaCarousel6'
import './css/base6.css'
import './css/sandbox6.css'
import './css/embla.css'
const OPTIONS6 = {}
const SLIDE_COUNT6 = 4
const SLIDES6 = Array.from(Array(SLIDE_COUNT6).keys())
class Content6 extends Component {
  state = {
    x : 0,
    total : 125
  };
  render(){
    return <div>
      <div className="Content">
          <main className="sandbox6">
            <section className="sandbox__carousel6">
              <EmblaCarousel slides={SLIDES6} options={OPTIONS6} />
            </section>
          </main>
          <div className="inf">
          <p className="SneakerCompany">HOLLUKA BRANDS LTD</p> <br />
          <p className="limited">Holluka Girls Hill Shoe</p> <br />
          <p className="low">
          These Holluka Girls 2022 Girls shoe outdoor are your perfect casual wear companion.Featuring a durable rubber outer sole. theyll withstand everything the weather can offer.
          </p> <br />
          <p className="price">$198.99  <span className="discount">50%</span></p>
          <p className="price2"><del>$410</del></p>
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
export default Content6;
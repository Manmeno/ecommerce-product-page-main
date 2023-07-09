import React from 'react'

export default function Cart() {
  return (
        <div id="prod">
            <div className="tit">
              <p className="subtit">Cart</p>
              <hr />
            </div>
            <div id="sub-prod">
              <div className="prod2">
              <img src="./images/image-product-1-thumbnail.jpg" className='test' alt="icon" /> <small> Fall Limited Edition Sneakers </small> <img src="./images/icon-delete.svg" className="delete" alt="icon" />
              {/* <small className='total'>$125.00 X {this.state.x}</small> <br /> */}
              </div>
                  <button className='btn' href>Checkout</button>
            </div>
            <div id="sub-prod">
              <div className="prod2">
              <img src="./images/image-product-1-thumbnail.jpg" className='test' alt="icon" /> <small> Fall Limited Edition Sneakers </small> <img src="./images/icon-delete.svg" className="delete" alt="icon" />
              {/* <small className='total'>$125.00 X {this.state.x}</small> <br /> */}
              </div>
                  <button className='btn'>Checkout</button>
            </div>
          </div>
  )
}

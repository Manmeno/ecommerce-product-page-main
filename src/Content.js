import React, { Component, useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
class Content extends Component {
  state = {
    x : 0
  };
  function Lightbox() {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
      './images/image-product-1.jpg',
      './images/image-product-2.jpg',
      './images/image-product-3.jpg',
      './images/image-product-4.jpg',
    ];
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
      render(){
      return <div className="Content">
      <div className="images">
        <img src="./images/image-product-1.jpg" className="imageProduct1" alt="icon" />
        <div className="imagessmall">
        <div>
        {images.map((src, index) => (
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="300"
          key={ index }
          style={{ margin: '2px' }}
          alt=""
        />
        ))}

        {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
        />
        )}
        </div>
          <div>
          <img src="./images/image-product-1-thumbnail.jpg" className="imageProduct1Thumbnail" alt="icon" />
          <img src="./images/image-product-2-thumbnail.jpg" className="imageProduct2Thumbnail" alt="icon" />
          <img src="./images/image-product-3-thumbnail.jpg" className="imageProduct3Thumbnail" alt="icon" />
          <img src="./images/image-product-4-thumbnail.jpg" className="imageProduct4Thumbnail" alt="icon" />
          </div>
          </div>
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
          <button className="btn"><img src="./images/icon-cart.svg" alt="icon" className="iconcart" /> <span className="btnCart">Add to cart</span></button>
          </div>
        </div>
      </div>
    </div>
  } 
    }
      }
export default Content;
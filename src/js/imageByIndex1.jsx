import image1 from './images/product/image-product-1.jpg'
import image2 from './images/product/image-product-2.jpg'
import image3 from './images/product/image-product-3.jpg'
import image4 from './images/product/image-product-4.jpg'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
import image1 from './images/girl-brand/girl-brand-one.jpg'
import image2 from './images/girl-brand/girl-brand-two.jpg'
import image3 from './images/girl-brand/girl-brand-three.jpg'
import image4 from './images/girl-brand/girl-brand-four.jpg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
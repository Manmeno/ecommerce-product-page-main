import image1 from './images/girl-brand-main/girl-brand-main.jpg'
import image2 from './images/girl-brand-main/girl-new-two.jpg'
import image3 from './images/girl-brand-main/girl-new-three.jpg'
import image4 from './images/girl-brand-main/girl-new-four_176x176.jpg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
import image1 from './images/jourdon/jordan-one.jpg'
import image2 from './images/jourdon/jordan-two.jpg'
import image3 from './images/jourdon/jordan-three.jpg'
import image4 from './images/jourdon/jordan-four.jpg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
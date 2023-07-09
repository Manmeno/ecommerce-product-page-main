import image1 from './images/girl-hill-main/girl-hill-main.jpg'
import image2 from './images/girl-hill-main/girl-hill-one.jpg'
import image3 from './images/girl-hill-main/girl-hill-two.jpg'
import image4 from './images/girl-hill-main/girl-hill-four.jpg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
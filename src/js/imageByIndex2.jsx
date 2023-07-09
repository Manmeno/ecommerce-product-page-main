import image1 from './images/nike/nike-new-one.jpg'
import image2 from './images/nike/nike-new-two.jpg'
import image3 from './images/nike/nike-new-three.jpg'
import image4 from './images/nike/nike-new-four.jpg'
export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
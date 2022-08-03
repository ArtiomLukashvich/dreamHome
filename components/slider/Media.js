import image1 from '../../public/slider/slide1.jpg'
import image2 from '../../public/slider/slide2.jpg'
import image3 from '../../public/slider/slide3.jpg'
import image4 from '../../public/slider/slide1.jpg'
import image5 from '../../public/slider/slide2.jpg'

export const media = [image1, image2, image3, image4, image5]
export const mediaByIndex = index => media[index % media.length]

import image1 from '../../../public/slider/slide1.jpg'
import image2 from '../../../public/slider/slide2.jpg'
import image3 from '../../../public/slider/slide3.jpg'
import image4 from '../../../public/slider/slide1.jpg'
import image5 from '../../../public/slider/slide2.jpg'
import image6 from '../../../public/slider/slide3.jpg'

// export const media = [image1, image2, image3, image4, image5]
export const mediaByIndex = index => media[index % media.length]

export const media = [
	{
		path: image1,
		title: 'Estaing',
		country: 'France',
		url: '/',
	},
	{
		path: image2,
		title: 'Montego Bay',
		country: 'Jamaica',
		url: '/',
	},
	{
		path: image3,
		title: 'Estaing',
		country: 'France',
		url: '/',
	},
	{
		path: image4,
		title: 'Montego Bay',
		country: 'Jamaica',
		url: '/',
	},
	{
		path: image5,
		title: 'Estaing',
		country: 'France',
		url: '/',
	},
	{
		path: image6,
		title: 'Montego Bay',
		country: 'Jamaica',
		url: '/',
	},
]

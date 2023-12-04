'use client'
import Image from 'next/image'
import CardSmall from '../CardSmall'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function SliderParceiras() {
	return (
		<div>
			<Swiper
				spaceBetween={15}
				slidesPerView={'auto'}
				// breakpoints={{
				// 	1719: {
				// 		slidesPerView: 5,
				// 		spaceBetween: 15
				// 	},
				// 	1369: {
				// 		slidesPerView: 4,
				// 		spaceBetween: 15
				// 	},
				// 	1069: {
				// 		slidesPerView: 3,
				// 		spaceBetween: 15
				// 	},
				// 	769: {
				// 		slidesPerView: 2,
				// 		spaceBetween: 15
				// 	}
				// }}
			>
				<SwiperSlide>
					<Image src='/images/parceira-comma.png' alt='Comma' width={308} height={64} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/images/parceira-melissa.png' alt='Melissa' width={308} height={64} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/images/parceira-forever21.png' alt='Forever21' width={308} height={64} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/images/parceira-zara.png' alt='Zara' width={308} height={64} />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/images/parceira-anntaylor.png' alt='Ann Taylor' width={308} height={64} />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

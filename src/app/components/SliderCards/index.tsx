'use client'

import CardSmall from '../CardSmall'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export default function SliderCards() {
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
        //   769: {
        //     slidesPerView: 2,
        //     spaceBetween: 15
        //   },

				// }}
			>
				<SwiperSlide>
					<CardSmall title='Produtos importados' text='Produto de Alta Qualidade' icon='globe' />
				</SwiperSlide>
				<SwiperSlide>
					<CardSmall title='Estoque no Brazil' text='Produtos mais perto de você!' icon='estoque' />
				</SwiperSlide>
				<SwiperSlide>
					<CardSmall
						title='Trocas Garantidas'
						text='Trocas em até 48 horas, vejas as regras'
						icon='troca'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CardSmall title='Ganhe 5% off' text='Pagando à vista no Cartão' icon='desconto' />
				</SwiperSlide>
				<SwiperSlide>
					<CardSmall title='Frete Grátis' text='Em compras acima de R$ 499,00' icon='caminhao' />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

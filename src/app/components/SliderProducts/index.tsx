'use client'

import Image from 'next/image'
// import Swiper core and required modules
import { Navigation } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import s from './style.module.scss'
import ButtonPrimary from '../ButtonPrimary'

export default function SliderProducts() {
	return (
		<div>
			<Swiper
				modules={[Navigation]}
				spaceBetween={16}
				slidesPerView={'auto'}
				loop={true}
				navigation
				breakpoints={{
					1460: {
						slidesPerView: 5,
						spaceBetween: 16
					},
					980: {
						slidesPerView: 4,
						spaceBetween: 16
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 16
					}
				}}
			>
				<SwiperSlide>
					<ProductCard1 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard2 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard1 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard2 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard1 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard2 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard1 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard2 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard1 />
				</SwiperSlide>
				<SwiperSlide>
					<ProductCard2 />
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

function ProductCard1() {
	return (
		<div className={s.product__card}>
			<div className={s.product__card_image}>
				<Image src='/images/product-1.png' alt='Produto' width={308} height={381} />
			</div>
			<div className={s.product__card_info}>
				<div className={s.skuselector}>
					<div className={`${s.skuselector__item} ${s.orange}`}></div>
					<div className={`${s.skuselector__item} ${s.salmon}`}></div>
					<div className={`${s.skuselector__item} ${s.blue}`}></div>
					<div className={`${s.skuselector__item} ${s.purple}`}></div>
				</div>
				<span className={s.product__card_price}>R$ 500,00</span>
				<div className={s.product__card_title}>Faux Suede Mini Skirt</div>
				<div className={s.product__card_description}>
					A faux suede mini skirt featuring exposed button_front closures and panel seam
					construction.
				</div>
				<div className={s.product__card_addtocart}>
					<ButtonPrimary>Adicionar</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}

function ProductCard2() {
	return (
		<div className={s.product__card}>
			<div className={s.product__card_image}>
				<Image src='/images/product-2.png' alt='Produto' width={308} height={381} />
			</div>
			<div className={s.product__card_info}>
				<div className={s.skuselector}>
					<div className={`${s.skuselector__item} ${s.black}`}></div>
					<div className={`${s.skuselector__item} ${s.red}`}></div>
					<div className={`${s.skuselector__item} ${s.gray}`}></div>
					<div className={`${s.skuselector__item} ${s.smoke}`}></div>
				</div>
				<span className={s.product__card_price}>R$ 350,00</span>
				<div className={s.product__card_title}>Ruched Rose Print Mini Skirt</div>
				<div className={s.product__card_description}>
					A satin mini skirt featuring an allover floral print, ruched side with self-tie closure,
					concealed back zipper, and a flounce hem.
				</div>
				<div className={s.product__card_addtocart}>
					<ButtonPrimary>Adicionar</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}

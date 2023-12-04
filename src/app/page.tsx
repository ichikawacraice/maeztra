import React from 'react'
import Header from './components/Header'
import BannerMain from './components/BannerMain'
import SliderCards from './components/SliderCards'
import SliderProducts from './components/SliderProducts'

import Image from 'next/image'
import s from './page.module.scss'
import ButtomPrimary from './components/ButtonPrimary'
import SliderParceiras from './components/SliderParceiras'

export default function Home() {
	return (
		<main className={s.main}>
			<Header />
			<BannerMain />

			<section className={`${s.services} ${s.container}`}>
				<h3 className={s.services__title}>Por que comprar na Maeztra?</h3>
				<div className={s.services__cards}>
					<SliderCards />
				</div>
			</section>

			<section className={`${s.parceiras} ${s.container}`}>
				<h2 className={s.parceiras__title}>Marcas Parceiras</h2>
				<div className={s.parceiras__cards}>
					<SliderParceiras />
				</div>
			</section>

			<section className={`${s.products} ${s.container}`}>
				<h2 className={s.products__title}>As Mais Pedidas</h2>
				<div className={s.products__shelf}>
					<SliderProducts />
				</div>
			</section>

			<section className={`${s.collections} ${s.container}`}>
				<div className={s.collections__left}>
					<h3 className={s.collections__title}>Lorem ipsum </h3>
					<p className={s.collections__description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce
						proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget
						nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit
						pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis
						id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit
						massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor
						phasellus donec condimentum sit sapien.
					</p>
				</div>
				<div className={s.collections__right}>
					<div className={s.collections__image}>
						<Image
							className={s.desktop}
							src='/images/collections.png'
							alt='Coleção outono-inverno'
							width={1114}
							height={480}
						/>
						<Image
							className={s.mobile}
							src='/images/collections-mobile.png'
							alt='Coleção outono-inverno'
							width={308}
							height={190}
						/>
					</div>
				</div>
			</section>

			<section className={s.newsletter}>
				<div className={s.container}>
					<div className={s.newsletter__wrapper}>
						<div className={s.newsletter__title}>
							<h3 className={s.newsletter__title}>Recebe Nossa Newsletter</h3>
						</div>
						<form action='' className={s.newsletter__form}>
							<input type='email' placeholder='Digite seu e-mail' />
							<div className={s.newsletter__form_button}>
								<ButtomPrimary>Enviar</ButtomPrimary>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	)
}

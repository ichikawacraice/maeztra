import s from './style.module.scss'
import { Montserrat } from 'next/font/google'

import ButtomPrimary from '../ButtonPrimary'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap'
})

export default function BannerMain() {
	return (
		<div className={`${s.banner__main} ${montserrat.className}`}>
			<div className={s.banner__main_content}>
				<h1 className={s.banner__main_title}>Promoções de Outono</h1>
				<h2 className={s.banner__main_text}>
					Confiras os melhores looks para combinar com você nesse Outono
				</h2>
				<div className={s.banner__main_button}>
					<ButtomPrimary>Conferir</ButtomPrimary>
				</div>
			</div>
		</div>
	)
}

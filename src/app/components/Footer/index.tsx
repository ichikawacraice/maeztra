import s from './style.module.scss'

import Image from 'next/image'

export default function Footer() {
	return (
		<footer className={s.footer}>
			<div className={s.footer__main}>
				<div className={s.container}>
					<div className={s.footer__wrapper}>
						<div className={`${s.footer__left} ${s.footer__group}`}>
							<ul className={s.footer__menu}>
								<li className={s.footer__menu_title}>Informações</li>
								<li className={s.footer__menu_item}>Quem Somos</li>
								<li className={s.footer__menu_item}>Prazo de Envio</li>
								<li className={s.footer__menu_item}>Trocas e Devoluções</li>
								<li className={s.footer__menu_item}>Promoções e Cupons</li>
							</ul>
						</div>

						<div className={`${s.footer__middle} ${s.footer__group}`}>
							<ul className={s.footer__menu}>
								<li className={s.footer__menu_title}>Minha Conta</li>
								<li className={s.footer__menu_item}>Minha Conta</li>
								<li className={s.footer__menu_item}>Meus Pedidos</li>
								<li className={s.footer__menu_item}>Cadastre-se</li>
							</ul>
						</div>

						<div className={`${s.footer__right} ${s.footer__group}`}>
							<ul className={s.footer__menu}>
								<li className={s.footer__menu_title}>Onde nos Encontrar</li>
								<li className={s.footer__menu_item}>Lojas</li>
								<li className={s.footer__menu_item}>Endereço</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className={s.footer__bottom}>
				<div className={s.container}>
					<div className={s.footer__wrapper}>
						<div className={s.footer__left}>
              <Image src='/icons/icon-facebook.svg' alt='Facebook' width={32} height={32} />
              <Image src='/icons/icon-linkedin.svg' alt='LinkedIn' width={32} height={32} />
              <Image src='/icons/icon-instagram.svg' alt='Instagram' width={32} height={32} />
              <Image src='/icons/icon-youtube.svg' alt='Youtube' width={32} height={32} />
            </div>
						<div className={s.footer__middle}>
            <Image src='/icons/visa.svg' alt='Visa' width={32} height={25} />
            <Image src='/icons/mastercard.svg' alt='Mastercard' width={32} height={25} />
            <Image src='/icons/visa.svg' alt='Visa' width={32} height={25} />
            <Image src='/icons/mastercard.svg' alt='Mastercard' width={32} height={25} />
            </div>
						<div className={s.footer__right}>
            <Image className={s.footer__logo_vtex} src='/images/powered-by-vtex.png' alt='Vtex' width={208} height={49} />
            <Image src='/images/powered-by-maeztra.png' alt='Maeztra' width={120} height={49} />
            </div>
					</div>
				</div>
			</div>
		</footer>
	)
}

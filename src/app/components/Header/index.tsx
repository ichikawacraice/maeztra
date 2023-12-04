"use client"

import Image from 'next/image'
import s from './style.module.scss'
import ButtonPrimary from '../ButtonPrimary'
import ButtonSecondary from '../ButtonSecondary'

export default function Header() {
	return (
		<header className={s.wrapper}>
			<div className={s.wrapper__top}>
				<p className={s.text}>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
			</div>

			<div className={s.wrapper__shadow}>
				<div className={`${s.wrapper__middle} ${s.container} ${s.desktop}`}>
					<div className={s.wrapper__middle_left}>
						<Image src='/images/maeztra_logo.png' alt='Logo Maeztra' width={147} height={18} />
					</div>

					<div className={s.wrapper__middle_center}>
						<div className={s.search}>
							<input className={s.search__input} type='text' placeholder='O Que Você Busca?' />
							<div className={s.search__button}>
								<ButtonPrimary>
									{' '}
									<span className={s.search__button_text}>Buscar</span>{' '}
								</ButtonPrimary>
							</div>
						</div>
					</div>

					<div className={s.wrapper__middle_right}>
						<div className={s.login}>
							<ButtonSecondary text='Minha Conta' icon='user' />
						</div>
						<div className={s.wishlist}>
							<ButtonSecondary text='Lista de Desejos' icon='heart' />
						</div>
						<div className={s.cart}>
							<ButtonSecondary text='Meu Carrinho' icon='shoppingbag' border='orange' />
						</div>
					</div>
				</div>

        <div className={`${s.wrapper__middle} ${s.container} ${s.mobile}`}>
					<div className={s.wrapper__middle_left}>
            <Image src='/icons/icon-menu.svg' alt='Menu' width={24} height={24} />
						<Image src='/images/maeztra_logo.png' alt='Logo Maeztra' width={110} height={12} />
					</div>

					<div className={s.wrapper__middle_right}>
            <Image src='/icons/icon-busca.svg' alt='Buscar' width={24} height={24} />
            <Image src='/icons/icon-shoppingbag.svg' alt='Minha Conta' width={24} height={24} />
					</div>
				</div>
			</div>

			<div className={`${s.wrapper__bottom} ${s.container}`}>
				<nav className={s.menu}>
					<ul>
						<li className={s.menu__item_bold}>
							<Image
								className={s.menu__item_icon}
								src='/icons/icon-dress.svg'
								alt='Novidades'
								width={16}
								height={16}
							/>
							Novidades
						</li>
						<li className={s.menu__item}>Vestidos</li>
						<li className={s.menu__item}>Roupas</li>
						<li className={s.menu__item}>Sapatos</li>
						<li className={s.menu__item}>Lingerie</li>
						<li className={s.menu__item}>Acessórios</li>
						<li className={s.menu__item}>OUTLET</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

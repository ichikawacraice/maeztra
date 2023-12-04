import React, { ReactNode } from 'react'
import s from './style.module.scss'

import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap'
})

type Props = {
  children: ReactNode
}

export default function ButtomPrimary({ children }: Props) {
	return (
		<button className={`${s.btn_primary} ${titillium.className}`} type='submit'>
			{children}
		</button>
	)
}

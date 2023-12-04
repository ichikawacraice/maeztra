import type { Metadata } from 'next'
import { Montserrat, Titillium_Web } from 'next/font/google'
import './styles/globals.scss'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap'
})

const titillium = Titillium_Web({
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Maeztra Layout',
	description: 'React using Nextjs by Gabriel Ichikawa Craice'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR'>
			<body className={titillium.className}>{children}</body>
		</html>
	)
}

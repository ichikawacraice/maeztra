import Image from 'next/image'
import s from './style.module.scss'

interface Props {
	text: string
	icon?: "user" | "heart" | "shoppingbag"
	border?: "orange"
}

export default function ButtonSecondary({ text, icon, border}: Props) {
	return (
		<button className={`${s.btn__secondary} ${border ? s[border] : ''}`} type='submit'>
			<Image className={s.btn__secondary_icon} src={`/icons/icon-${icon}.svg`} alt={text} width={18} height={16} />
			<span className={s.btn__secondary_text}>{text}</span>
		</button>
	)
}

import s from './style.module.scss';
import Image from 'next/image';

interface Props {
  title: string
  text: string
  icon?: string
}

export default function CardSmall({ title, text, icon}: Props) { 
  return (
    <div className={s.card}>
      <div className={s.card__icon}>
        <Image src={`/icons/icon-${icon}.svg`} alt={title} width={32} height={32} />
      </div>
      <div className={s.card__info}>
        <h4 className={s.card__info_title}>{title}</h4>
        <p className={s.card__info_text}>{text}</p>
      </div>
    </div>
  )
}
import classNames from 'classnames'
import Image, {StaticImageData} from 'next/image'
import React from 'react'
import s from './s.module.scss'

type Props = {
  src: StaticImageData
  price: number
  isActive: boolean
  onClick: () => void
}

const Icon: React.FC<Props> = ({src, price, isActive, onClick}) => {
  return (
    <div className={s.wrap} onClick={onClick}>
      <Image
        src={src}
        className={classNames({[s.deactive]: !isActive})}
        width='36'
        height='36'
      />
      <div className={s.price}>{price} ₽</div>
    </div>
  )
}

export default Icon

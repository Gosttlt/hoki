import React from 'react'
import {useAppSelector} from 'src/hooks/redux'
import Container from '../interface/Container'
import s from './s.module.scss'

type Props = {}

const Price: React.FC<Props> = () => {
  const {price} = useAppSelector(state => state.TariffConfigSlice)
  return (
    <div className={s.wrap}>
      <Container>
        <div className={s.price}>
          <b>{price} ₽</b> /месяц
        </div>
      </Container>
    </div>
  )
}

export default Price

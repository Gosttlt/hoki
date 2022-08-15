import React from 'react'
import Icon from './Icon'
import s from './s.module.scss'
import {TariffConfigSlice} from 'src/store/TariffConfig'
import {useAppDispatch} from 'src/hooks/redux'
import {TSocNetKey, TVideoServKey} from 'src/models/TarifConfigModel'
import {TIconArr} from './assets/objs'

type Props = {
  values: TIconArr<TSocNetKey | TVideoServKey>[]
  type: 'videoServices' | 'socNets'
}

const CheckboxIcons: React.FC<Props> = ({values, type}) => {
  const {setValue} = TariffConfigSlice.actions

  const onClickHandler = (key: TSocNetKey | TVideoServKey) => {
    const icon = values.find(icon => icon.key === key)

    if (icon) {
      icon.isActive = !icon.isActive
    }
    const activeIcons = values.filter(icon => icon.isActive)

    const price = activeIcons.reduce((prev, next) => prev + next.price, 0)

    dispatch(setValue({key: type, value: price}))
  }
  const dispatch = useAppDispatch()
  return (
    <div className={s.wrap}>
      {values.map(value => {
        const {isActive, key, price, src} = value
        return (
          <Icon
            src={src}
            price={price}
            key={key}
            isActive={isActive}
            onClick={() => {
              onClickHandler(key)
            }}
          />
        )
      })}
    </div>
  )
}

export default CheckboxIcons

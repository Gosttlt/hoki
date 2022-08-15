import classNames from 'classnames'
import React, {useRef} from 'react'
import {RangeType} from './assets/objs'
import s from './s.module.scss'

type Props = {
  values: RangeType[]
  type: string
  value: number
  onClick: (value: number) => void
}

const RangeSlider: React.FC<Props> = ({values, value, type, onClick}) => {
  const range = [0, 185, 355, 524]
  let currentRange = 0
  values.forEach((val, i) => {
    if (val.price === value) {
      currentRange = range[i]
    }
  })

  return (
    <div className={s.wrap}>
      <div className={s.fill} style={{width: `${currentRange}px`}} />
      <div className={s.handle} style={{left: `${currentRange}px`}} />
      <div className={s.values_wrap}>
        {values.map((item, i) => {
          const isCurrentValue = value === item.price
          return (
            <div
              className={classNames({[s.active]: isCurrentValue})}
              style={{left: range[i]}}
              key={item.value}
              onClick={() => {
                onClick(item.price)
              }}
            >
              {isCurrentValue ? item.value + ' ' + type : item.value}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RangeSlider

import React, {ReactNode} from 'react'
import s from './s.module.scss'

type Props = {
  children: ReactNode
  title: string
  description?: string
}

const InfoBlock: React.FC<Props> = ({children, title, description}) => {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{title}</h2>
      {description && <p>{description}</p>}
      <div>{children}</div>
    </div>
  )
}

export default InfoBlock

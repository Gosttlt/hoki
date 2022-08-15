import React, {ReactNode} from 'react'
import s from './s.module.scss'

type Props = {
  children: ReactNode
}
const Container: React.FC<Props> = ({children}) => {
  return <div className={s.wrap}>{children}</div>
}

export default Container

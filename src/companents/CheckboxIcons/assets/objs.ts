import vk from './images/vk.png'
import ok from './images/ok.png'
import va from './images/va.png'
import tg from './images/tg.png'
import vb from './images/vb.png'
import tt from './images/tt.png'
import hz from './images/hz.png'
import {TSocNetKey, TVideoServKey} from 'src/models/TarifConfigModel'
import {StaticImageData} from 'next/image'

export type TIconArr<T> = {
  src: StaticImageData
  key: T
  price: number
  isActive: boolean
}

export const socNetsArr: TIconArr<TSocNetKey>[] = [
  {src: vk, key: 'vk', price: 20, isActive: false},
  {src: ok, key: 'ok', price: 20, isActive: false},
  {src: va, key: 'va', price: 10, isActive: false},
  {src: tg, key: 'tg', price: 20, isActive: false},
  {src: vb, key: 'vb', price: 10, isActive: false},
]

export const videoServicesArr: TIconArr<TVideoServKey>[] = [
  {src: tt, key: 'tt', price: 100, isActive: false},
  {src: hz, key: 'hz', price: 100, isActive: false},
]

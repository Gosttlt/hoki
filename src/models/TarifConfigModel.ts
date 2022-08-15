export type TSocNetKey = 'vk' | 'ok' | 'va' | 'tg' | 'vb'
export type TVideoServKey = 'tt' | 'hz'

export interface ITariffConfig {
  mins: number
  sms: number
  gbs: number
  socNets: number
  videoServices: number
}

export type RangeType = {
  price: number
  value: number
}
export const minsObj: RangeType[] = [
  {price: 0, value: 100},
  {price: 100, value: 200},
  {price: 200, value: 300},
  {price: 300, value: 600},
]

export const smsObj: RangeType[] = [
  {price: 0, value: 0},
  {price: 100, value: 50},
  {price: 200, value: 100},
  {price: 300, value: 150},
]

export const gbsObj: RangeType[] = [
  {price: 0, value: 5},
  {price: 100, value: 10},
  {price: 200, value: 15},
  {price: 300, value: 25},
]

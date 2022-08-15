import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITariffConfig} from 'src/models/TarifConfigModel'

interface IinitialState extends ITariffConfig {
  price: number
  basePrice: number
  test: string
  error: string
  isLoading: boolean
}
const initialState: IinitialState = {
  test: '',
  error: '',
  isLoading: false,
  mins: 0,
  sms: 0,
  gbs: 0,
  socNets: 0,
  videoServices: 0,
  price: 0,
  basePrice: 400,
}

export const TariffConfigSlice = createSlice({
  name: 'TariffConfig',
  initialState,
  reducers: {
    fetchSetTariff(state, action: PayloadAction<string>) {
      state.test = action.payload
    },
    setValue(
      state,
      action: PayloadAction<{
        key: keyof ITariffConfig
        value: number
      }>,
    ) {
      const {key, value} = action.payload
      state[key] = value
      state.price =
        state.basePrice +
        state.mins +
        state.sms +
        state.gbs +
        state.socNets +
        state.videoServices
    },
  },
})

export default TariffConfigSlice.reducer

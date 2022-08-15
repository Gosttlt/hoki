import axios from 'axios'
import {TariffConfigSlice} from 'src/store/TariffConfig'
import {AppDispatch} from './../index'

export const fetchProfile = () => async (dispatch: AppDispatch) => {
  try {
    const data = await axios.get('/api/tariff')
    dispatch(TariffConfigSlice.actions.fetchSetTariff('asd'))
  } catch (e) {}
}

import {configureStore, ThunkAction} from '@reduxjs/toolkit'
import {Action, combineReducers} from 'redux'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import TariffConfigSlice from './TariffConfig'

const rootReducer = combineReducers({
  TariffConfigSlice,
})
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.count) nextState.count = state.count
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  })

const store = configureStore({
  reducer: {
    TariffConfigSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>
export const wrapper = createWrapper<AppStore>(makeStore)

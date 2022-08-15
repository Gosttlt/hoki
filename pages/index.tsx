import type {NextPage} from 'next'
import Head from 'next/head'
import Container from 'src/companents/interface/Container'
import Price from 'src/companents/Price'
import RangeSlider from 'src/companents/RangeSlider'
import CheckboxIcons from 'src/companents/CheckboxIcons'
import {useAppDispatch, useAppSelector} from 'src/hooks/redux'
import {TariffConfigSlice} from 'src/store/TariffConfig'

import s from '../styles/Home.module.css'
import InfoBlock from 'src/companents/InfoBlock'
import {
  socNetsArr,
  videoServicesArr,
} from 'src/companents/CheckboxIcons/assets/objs'
import {gbsObj, minsObj, smsObj} from 'src/companents/RangeSlider/assets/objs'
import {fetchProfile} from 'src/store/TariffConfig/ActionCreators'

const Home: NextPage = () => {
  const {mins, sms, gbs} = useAppSelector(state => state.TariffConfigSlice)
  const dispatch = useAppDispatch()
  const {setValue} = TariffConfigSlice.actions

  return (
    <>
      <Container>
        <Head>
          <title>Конфигуратор тарифов</title>
          <meta
            name='description'
            content='Конфигуратор тарифов мобильной связи'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={s.main}>
          <button onClick={() => dispatch(fetchProfile())}>ads</button>
          <h1 className={s.h1}>Настройте тариф</h1>
          <InfoBlock title='Минуты' description='На Tele2 России безлимитно'>
            <RangeSlider
              value={mins}
              values={minsObj}
              type='мин.'
              onClick={(value: number) => {
                dispatch(setValue({key: 'mins', value}))
              }}
            />
          </InfoBlock>
          <InfoBlock title='SMS'>
            <RangeSlider
              value={sms}
              values={smsObj}
              type='sms'
              onClick={(value: number) => {
                dispatch(setValue({key: 'sms', value}))
              }}
            />
          </InfoBlock>

          <InfoBlock title='Интернет'>
            <RangeSlider
              value={gbs}
              values={gbsObj}
              type='sms'
              onClick={(value: number) => {
                dispatch(setValue({key: 'gbs', value}))
              }}
            />
          </InfoBlock>

          <InfoBlock title='Соцсети и мессенджеры'>
            <CheckboxIcons values={socNetsArr} type='socNets' />
          </InfoBlock>
          <InfoBlock title='Видеосервисы'>
            <CheckboxIcons values={videoServicesArr} type='videoServices' />
          </InfoBlock>
        </main>
      </Container>
      <Price />
    </>
  )
}

export default Home

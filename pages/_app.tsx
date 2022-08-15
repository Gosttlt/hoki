import '../styles/globals.css'
import React from 'react'
import {wrapper} from '../src/store'
import {AppProps} from 'next/app'

const WrappedApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)

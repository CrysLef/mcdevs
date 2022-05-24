import type { AppProps } from 'next/app'
import { globalStyles } from 'styles/globalStyle'

import { Footer } from 'components/Footer'
import { Header } from 'components/Header'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles()}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

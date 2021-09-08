import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/globals.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>)
}
export default MyApp

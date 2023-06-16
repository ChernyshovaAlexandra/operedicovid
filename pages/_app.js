
import '../styles/globals.css'
import '../styles/scss/index.scss'

export default function App({ Component, pageProps }) {
  const GTM_ID = 'GTM-MJGJFWK'

  return <>
    <Component {...pageProps} />
  </>
}
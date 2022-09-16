import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <div className="flex flex-col">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </Head>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </div>

  )
}

export default MyApp

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Nav from '../components/nav'
import Foot from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
  <div className="flex flex-col h-screen">
            <main className="flex-1 overflow-y-auto p-5">
                <Nav />
                <Component {...pageProps} />
            </main>
            <Foot />
        </div>)
}

export default MyApp

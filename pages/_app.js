import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Nav from '../src/nav'
import Foot from '../src/foot'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)



function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
        <Nav />
        <main className="flex-1 overflow-y-auto p-5">
            <Component {...pageProps} />
        </main>
        <Foot />
    </div>
);
}

export default MyApp

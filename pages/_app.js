import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Nav from '../src/nav'
import Foot from '../src/foot'

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

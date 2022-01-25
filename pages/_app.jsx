import Name from '../component/name'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return ( 
    <div className='flexy'>
        <Name />
        <Component {...pageProps }/> 
    </div>

    )
}

export default MyApp
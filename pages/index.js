import Head from 'next/head'
import {grids} from '../src/data/grids'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cestladwvicy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <main className="flex flex-col min-h-screen justify-start sm:flex-row sm:justify-end"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 ">
                {grids.map(({ img, title, link }) => (
                    <div
                        className=""
                        key={`${img}${title}${link}`}>
                        <a href={link}><div className="container m-auto w-12/4 sm:w-12/2 px-1 justify-start py-1">
                <img
                    src={img}
                    alt="..."
                    className="shadow-lg border-none group-hover:25"
                />
            </div></a>
                    </div>
                ))}
            </div></div>)}
      
      
            {/* <div className="container m-auto w-10/2 sm:w-4/12 px-4 justify-start py-2">
                <img
                    src="https://i.imgur.com/NMVIzOW.png"
                    alt="..."
                    className="shadow-lg border-none"
                />
            </div>
            <div className="container m-auto w-10/2 sm:w-4/12 px-4 justify-start py-2">
                <img
                    src="https://i.imgur.com/NMVIzOW.png"
                    alt="..."
                    className="shadow-lg border-none"
                />
            </div>
            <div className="container m-auto w-10/2 sm:w-4/12 px-4 justify-start py-2">
                <img
                    src="https://i.imgur.com/NMVIzOW.png"
                    alt="..."
                    className="shadow-lg border-none"
                />
                </div> */}
  
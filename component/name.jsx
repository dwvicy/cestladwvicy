import React from 'react';
import {
    Icon
} from '@iconify/react';
import Link from 'next/link';
export default function Name() {
    return (

            <div className = "column" >
            <div className = "box">
            <Icon icon = "noto:crown" color = "#2a2a3c" height = "100" /> 
            <h2 className = "h1b"> Vaishnavi Dwivedi </h2> 
            <p className = "boday"> full-stack product designer </p>
            <div className = "box">
                        <div className = "cv-alt pointer">
                            <Link href="/about">
                                <p className = "btxt" > MORE ABOUT ME </p>
                            </Link>
                            <Link href="/about">
                                <Icon icon = "uil:arrow-up-right" color = "#2a2a3c" height="30"/>
                            </Link>
                        </div>
                    </div>
                    <br></br>
            <div className='cv2'>
            <a target="_blank" href='https://github.com/dwvicy'><Icon  className="icony"icon="entypo-social:github-with-circle" color="#2a2a3c" height="40" /> </a>
            <a target="_blank" href='https://linkedin.com/in/dwvicy'><Icon className="icony" icon="entypo-social:linkedin-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://youtube.com/c/dwvicy'><Icon  className="icony" icon="entypo-social:youtube-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://twitter.com/dwvicy'><Icon className="icony" icon="entypo-social:twitter-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://medium.com/@dwvicy'><Icon  className="icony" icon="entypo-social:medium-with-circle" color="#2a2a3c" height="40" /></a>
            </div>
            <div className='rowm'>
            <Icon icon="bytesize:code" color="#222" height="20" className='icoo'/> 
            <h1 className="footer">with</h1> 
            <Icon icon="noto:sparkling-heart" color="#222" height="20" className='icoo'/>
            <h1 className='footer'>by dwvicy</h1>
            </div>
            </div>
            </div>
                        // </div>
        )}
  
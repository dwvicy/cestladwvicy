import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    Icon
} from '@iconify/react';
import Link from 'next/link';

export default function Home() {
    return ( < div className = "row" >
            <div className = "column" >

            <div className = "box">
            
            <Icon icon = "noto:crown"
            color = "#2a2a3c"
            height = "100" /> 
            
            <h2 className = "h1b"> Vaishnavi Dwivedi </h2> 
            <p className = "boday"> full-stack product designer 
            </p>

            <div className='cv2'>
            <a target="_blank" href='https://github.com/dwvicy'><Icon  className="icony"icon="entypo-social:github-with-circle" color="#2a2a3c" height="40" /> </a>
            <a target="_blank" href='https://github.com/dwvicy'><Icon className="icony" icon="entypo-social:linkedin-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://github.com/dwvicy'><Icon  className="icony" icon="entypo-social:youtube-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://github.com/dwvicy'><Icon className="icony" icon="entypo-social:twitter-with-circle" color="#2a2a3c" height="40" /></a>
            <a target="_blank" href='https://github.com/dwvicy'><Icon  className="icony" icon="entypo-social:medium-with-circle" color="#2a2a3c" height="40" /></a>
            </div>
            
            </div>
            </div>
  
    
    <div className = "column1" >
    <div className = "child" >
        <h2 className = "h2b"> About Me </h2> 
        <p className = "boday"> You can find my work here. </p> 
        <div className = "box">
        <div className = "cv">
        <p className = "btxt" > READ MY CURRICULUM VITAE </p> 
        <Icon icon = "uil:arrow-up-right"
    color = "#2a2a3c" />
        </div>  </div >
</div>
        <div>
            <div className = "">

            </div>
        </div>

    <div className = "parent">
        <div className = "div1" >
        <div className = "worky" >
        <Icon className = "worky-icon"
    icon = "noto:briefcase"
    color = "#2a2a3c"
    height = "100" />
        <h3 className = "h2b-white worky-text" > Work Experience </h3>      
    </div> </div> <div className = "div2">
        <div className = "blogy">
        <Icon className = "blogy-icon"
    icon = "noto:bar-chart"
    color = "#2a2a3c"
    height = "80" />
        <h3 className = "h2b-white blogy-text" > My Case Studies </h3>      
        </div >

        </div> <div className = "div3" > <div className = "projy" >
        <Icon className = "projy-icon"
    icon = "noto:artist-palette"
    color = "#2a2a3c"
    height = "80" />
        <h3 className = "h2b-white worky-text" > Developer Projects </h3>      
        </div></div >

    <div className = "div4" >
        <div className = "talky" >
        <Icon className = "talky-icon"
    icon = "noto:studio-microphone"
    color = "#2a2a3c"
    height = "100" />
        <h3 className = "h2b-white talky-text" > Workshops & Talks </h3>      
        </div> </div> </div> </div> </div >)}

{
    /* 
    TODO:
    - Add a link to my CV
    - Add socials
    - Add Emoji Icons to the grid cards
    - Add text to the grid cards
    - Connect pages with grid cards
    - populate pages with relevant information
    - About page art stuff -> timeline, projects, positions taken etc.

    */
}
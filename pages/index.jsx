import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    Icon
} from '@iconify/react';
import Link from 'next/link';

export default function Home() {
    return ( 
        <div className="column1">
            <div className="child">
                <h2 className="h2b"> not your regular portfolio </h2> 
                <p className="boday"> i'm a <i>coder + product designer</i> based in <u>mumbai, india</u>.</p> 
                <p className="boday-chotu"> this page is meant to be a linktree, navigate to "my case studies" for my ux portfolio</p> 
                    <div className="box">
                    <a href='https://bit.ly/dwvicy-cv' target="_blank">
                        <div className="cv pointer">
                            
                            <p className="btxt"> READ MY CURRICULUM VITAE </p> 
                            <Icon icon="uil:arrow-up-right" color="#2a2a3c" />
                           
                        </div>
                        </a>
                    </div >
                   
                    
                </div>
            <div>
        </div>
        <div className='parent1'>
        <div className='div1-1 pointer'>
        <a className='aji' href="https://znap.link/dwvicy" target="_blank">
                <div className="projy">
                    <Icon className="projy-icon-1" icon="noto:headphone" color="#2a2a3c" height="50" />
                    <h3 className = "h2b-white-chotu worky-text" > my podcasts </h3>      
                </div></a>

        </div>

        <div className='div2-1 pointer'>
       <a className='aji' href='https://discord.com/invite/bxyPE5uH5R' target="_blank">
                <div className="projy">
                    <Icon className="projy-icon-1" icon="noto:alien-monster" color="#2a2a3c" height="50" />
                    <h3 className = "h2b-white-chotu worky-text" > my discord </h3>      
                </div></a>
            
        </div>

        <div className='div3-1 pointer'>
        <a className='aji' href='https://michispotlight.substack.com' target="_blank">
                <div className="projy">
                    <Icon className="projy-icon-1" icon="noto:rolled-up-newspaper" color="#2a2a3c" height="50" />
                    <h3 className = "h2b-white-chotu worky-text" > my newsletter </h3>      
                </div></a>
            
        </div>


    </div>

    <div className="parent">

        <div className="div1 pointer">
            <Link href="/case-studies"><a>
                <div className="worky">
                    <Icon className="worky-icon" icon="noto:bar-chart" color="#2a2a3c" height="80" />
                    <h3 className = "h2b-white worky-text"> case studies <span className='optional'> & ux research </span></h3>
                </div></a>
            </Link>
        </div>

    
        <div className="div2 pointer">
            <Link href="/work"><a className='aji'>
                <div className="blogy">
                    <Icon className="blogy-icon" icon="noto:briefcase" color="#2a2a3c" height="80" />
                    <h3 className="h2b-white blogy-text"> work experience </h3>      
                </div></a>
            </Link>
        </div> 
        
        <div className="div3 pointer"> 
            <Link href="/projects"><a className='aji'>
                <div className="projy">
                    <Icon className="projy-icon" icon="noto:artist-palette" color="#2a2a3c" height="80" />
                    <h3 className = "h2b-white worky-text" > developer projects </h3>      
                </div></a>
            </Link>
        </div>

        <div className="div4 pointer">
            <a href='https://www.polywork.com/dwvicy/collections/1483' target="_blank">    
                <div className="talky">
                    <Icon className="talky-icon" icon="noto:studio-microphone" color="#2a2a3c" height="80" />
                    <h3 className="h2b-white talky-text"> workshops & talks </h3>      
                </div></a>
            
        </div> 
    </div> 
    
  
</div> 
)}

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
import React from 'react';
import {Icon} from '@iconify/react';
import Link from 'next/link';

export default function Nav() {
    return(
        <div className="nav-bar">
        <div className="parentn">
        <div class="div1n"> 
        <span className='nav-icon'><Link href='/'><a> <Icon className="navy-icon "icon="noto:rocket" color="#2a2a3c" height="27"/></a></Link></span>
        <span className='label'> <Link href='/'><a>home</a></Link> </span>
        </div>
        <div className="div2n">
        <span className='nav-icon'><Link href='/about'><a><Icon className="navy-icon "icon="noto:crown" color="#2a2a3c" height="27"/></a></Link></span>
        <span className='label'> <Link href='/about'><a>about</a></Link> </span>
             </div>
        <div className="div3n"> 
        <span className='nav-icon'><Link href='/work'><a><Icon className="navy-icon "icon="noto:briefcase" color="#2a2a3c" height="27"/></a></Link></span>
        <span className='label'> <Link href='/work'><a>work</a></Link> </span>
        </div>
        <div className="div4n"> 
        <span className='nav-icon'><Link href='/projects'><a><Icon className="navy-icon "icon="noto:artist-palette" color="#2a2a3c" height="27"/></a></Link> </span>
        <span className='label'> <Link href='/projects'><a>code</a></Link> </span>
        </div>
        <div className="div5n"> 
        <span className='nav-icon'><Link href='/talks'><a><Icon className="navy-icon "icon="noto:studio-microphone" color="#2a2a3c" height="27"/></a></Link></span>
        <span className='label'><a href='https://www.polywork.com/dwvicy/collections/1483' target="_blank">talks</a> </span>
        </div>
        <div className="div6n"> 
        <span className='nav-icon'><Link href='/case-studies'><a><Icon className="navy-icon "icon="noto:bar-chart" color="#2a2a3c" height="27"/></a></Link></span>
        <span className='label'> <Link href='/case-studies'><a>design</a></Link> </span>
        </div>
        </div>
        </div>
    )
}
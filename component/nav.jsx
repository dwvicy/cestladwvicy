import React from 'react';
import {Icon} from '@iconify/react';

export default function Nav() {
    return(
        <div className="nav-bar">
        <div className="parentn">
        <div class="div1n"> 
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:rocket" color="#2a2a3c" height="25"/></span>
        <span className='label'> home </span>
        </div>
        <div className="div2n">
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:crown" color="#2a2a3c" height="25"/></span>
        <span className='label'> about </span>
             </div>
        <div className="div3n"> 
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:briefcase" color="#2a2a3c" height="25"/></span>
        <span className='label'> work </span>
        </div>
        <div className="div4n"> 
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:artist-palette" color="#2a2a3c" height="25"/></span>
        <span className='label'> code </span>
        </div>
        <div className="div5n"> 
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:studio-microphone" color="#2a2a3c" height="25"/></span>
        <span className='label'> talks </span>
        </div>
        <div className="div6n"> 
        <span className='nav-icon'><Icon className="navy-icon "icon="noto:bar-chart" color="#2a2a3c" height="25"/></span>
        <span className='label'> design </span>
        </div>
        </div>
        </div>
    )
}
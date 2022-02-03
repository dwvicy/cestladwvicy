import React from 'react';
import Nav from '../component/nav';
import Image from 'next/image';
import Link from 'next/link';
import {Icon} from '@iconify/react';

export default function CaseStudy() {
  return (
    <div className='column1'>
      <Nav />
      <br />
      <div className='project'>
      <h1 className='h2b-left'>case studies & ux design </h1>
      <p className='boday-about'>
        Here's my work as a UX designer.
      </p>
      <p className="boday-about-tiny"> you can also check out my coding projects instead </p> 
      <div className="box1">
        <a href='https://bit.ly/dwvicy-cv' target="_blank">
          <div className="cv1 pointer">
            <p className="btxt"> MY CODE PROJECTS </p> 
              <Icon icon="uil:arrow-up-right" color="#2a2a3c" height="20"/>
          </div>
        </a>
      </div >
      </div>
      <div>
      <div className='case-study-grid'>
        <div className='cs1'>
          <a href='https://www.canva.com/design/DAEn0OKLsRI/XQ9WRrwqp-hYwfl0rwSYGA/view?utm_content=DAEn0OKLsRI&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent' target="_blank">
            <Image className='cs1-img' src='/images/frontrow.png' width={480} height={270}/></a>
        </div>
        <div className='cs1'>
          <a href='https://vgre.notion.site/Port-Finance-9e147c64c62f4b498a137aaa347f75cc' target='_blank'><Image className='cs1-img' src='/images/Port.png' width={480} height={270}/></a></div>
          <div className='cs1'><Link href='/'><a><Image className='cs1-img' src='/images/100DaysOfUX.png' width={480} height={270}/></a></Link></div>
          <div className='cs1'><Link href='/'><a><Image className='cs1-img' src='/images/discord.png' width={480} height={270}/></a></Link></div>
          <div className='cs1'><Link href='/'><a><Image className='cs1-img' src='/images/skillperitia.png' width={480} height={270}/></a></Link></div>
          <div className='cs1'><Link href='/'><a><Image className='cs1-img' src='/images/Moo.png' width={480} height={270}/></a></Link></div>


      </div>
    </div>
    </div>
  );
}
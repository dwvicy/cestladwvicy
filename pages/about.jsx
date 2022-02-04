import Image from 'next/image';
import React from 'react';
import Nav from '../component/nav';


export default function About() {
  return (
    <div className='column1'>
      <Nav />
      <div className='child1'>
      <div className='rowm-about'>
      <Image src="/images/profile.jpeg" alt="about" width={399} height={399} className='me-img'/>
      <div className='about-text'>
      <h1 className='h2b-left'>About Me</h1>
      <p className="boday-grey"> I'm a <i>coder + product designer</i> based in <u>Mumbai, India.</u> 🇮🇳</p> 
      <p className='boday-about'>
        Hello, I'm Vaishnavi Dwivedi. 👋 </p>
        
        <p className='boday-about'>I'm a full-stack product designer (and Developer/Design Advocate) based in Mumbai, India. My journey into sproduct design is quite similar to many who transitioned to this field after being a software developer. </p>
      
        <p className='boday-about'>I've done UX Research in all of my developer internships since most of them were at startups. I've helped my teams design several opensource projects and conducted 40+ workshops (as of Jan 2022) specific to hands-on work with Figma, Design Thinking and Product Strategy.</p>
    
        <p className='boday-about'>My curiousity helps me to be open-minded towards feedback, filliing me with the eagerness to ask questions, and iterate towards a better product.
      </p>
      </div>
      </div>
      </div>
      </div>
  
  );
}
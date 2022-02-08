import { Icon } from '@iconify/react';
import React from 'react';
import Nav from '../component/nav';

export default function Work() {
  return (
    <div className='column1'>
      
      <Nav />
      <br />
      <div className='project'>
      <h1 className='h2b-left'>Work</h1>
      <p className='boday-about'>
        My most recent work experiences. <a href='https://linkedin.com/in/dwvicy' target='_blank'>Checkout more on my <u>LinkedIn profile</u></a>
      </p>

      <div>
        <h2 className='h2b-left-work'> Scaler Academy </h2>
        <p className='boday-work'><span className='title'><Icon className="navy-icon "icon="noto:avocado" color="#2a2a3c" height="17"></Icon> <b>Developer Advocate Intern</b> </span> | <i>Sep 2021 - Feb 2022</i></p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:artist-palette" color="#2a2a3c" height="14"></Icon> Collaborated with the opensource team to help them build high-fidelity wireframes.</p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:studio-microphone" color="#2a2a3c" height="14"></Icon> Organized fireside chats in the discord community of 85,000+ members. </p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:raising-hands" color="#2a2a3c" height="14"></Icon> Conducted hands on UX design sessions/workshops on figma for developers. </p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:rocket" color="#2a2a3c" height="14"></Icon> Facilitated exploration of different domains like Software Engineering, Machine Learning, UX Design, and Blockchain.</p>
<br />
        <h2 className='h2b-left-work'> Nimblebox.ai </h2>
        <p className='boday-work'><span className='title'><Icon className="navy-icon "icon="noto:avocado" color="#2a2a3c" height="17"></Icon> <b>Developer Advocate Intern</b> </span> | <i>Jul 2021 - Aug 2021</i></p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:writing-hand" color="#2a2a3c" height="14"></Icon> Spearheaded the growth team to build a community experience around an AI tool by sponsoring hackathons, conducting workshops, writing tutorials & beginner-centric documentation.</p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:gem-stone" color="#2a2a3c" height="14"></Icon> Evaluated the RnD department projects using customer feedback from the community.</p>
<br />
        <h2 className='h2b-left-work'> BottleHQ </h2>
        <p className='boday-work'><span className='title'><Icon className="navy-icon "icon="noto:bar-chart" color="#2a2a3c" height="17"></Icon> <b>Product Strategist</b></span> | <i>Dec 2020 - Aug 2021</i></p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:movie-camera" color="#2a2a3c" height="14"></Icon> Interviewed 10+ founders and product managers in customer interviews to validate our B2B product and convert them into clients.</p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:artist-palette" color="#2a2a3c" height="14"></Icon> Identified product metrics and UX bugs to improve the product’s onboarding process during beta and internal testing stages. </p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:mobile-phone" color="#2a2a3c" height="14"></Icon> Pioneered a customizable UX for the future modules of the product. </p>
<br />
        <p className='boday-work'><span className='title'><Icon className="navy-icon "icon="noto:desktop-computer" color="#2a2a3c" height="17"></Icon> <b>Software Engineer</b> </span> | <i>May 2020 - Nov 2020</i></p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:mobile-phone" color="#2a2a3c" height="16"></Icon> Developed & deployed a scalable mobile application using Flutter, Dart & Cloud Firestore (migrating the backend to MongoDB + Node.js)</p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:clipboard" color="#2a2a3c" height="16"></Icon> Collaborated with the product team improve the UX & UI of the products offered and brainstormed well-engineered ideas to add value to them.</p>
        <p className='boday-work'> <Icon className="navy-icon "icon="noto:laptop" color="#2a2a3c" height="16"></Icon> Built a REST API to perform basic CRUD operations keeping in mind the query response time, and to compute relevant statistics on the flutter as well as the web application.</p>

      </div>
      </div>
      
    </div>
  );
}
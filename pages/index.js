import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="row">
      <div className="column">
      <div className="child">
      <div className="box">
      <Icon icon="noto:crown" color="#2a2a3c" height="100" />
      </div> {/* box */}
          <h2 className="h1b"> Vaishnavi  Dwivedi </h2>
      <div className="roaw">
          {/* <Icon icon="noto:crystal-ball" color="#2a2a3c" height="20" /> */}
          <p className="boday">full-stack product designer</p>
      </div> {/* roaw */}
        </div> {/* child */}
      </div> {/* column */}
      <div className="column1">
        <div className="child">
        <h2 className="h2b">About Me</h2>
          <div className="box">
          <div className="cv">
              <p className="btxt"> READ MY CURRICULUM VITAE </p>
              <Icon icon="uil:arrow-up-right" color="#2a2a3c" />
          </div> {/* cv */}
          </div> {/* box */}
        </div> {/* child */}

        <div class="parent">
            <div class="div1"> </div>
            <div class="div2"> 2 </div>
            <div class="div3"> 3 </div>
            <div class="div4"> 4 </div>
        </div>
      </div> {/* column1 */}
</div>
  )
}

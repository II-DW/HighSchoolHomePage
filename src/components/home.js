import './home.css'
import React, { useState, useEffect } from 'react';
import backgroundimage from '../img/schoolbackground.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function Home() {

    return (
        
        <div className='MainPage'>


          <div className = 'Body-home'>
            <span className="maintext-home">3학년 6반 학급 홈페이지</span>
            <span className='subtext-home'>From. Daegun High School</span>
            <span className='tailtext-home'>Class 3-6</span>
            
          </div>

        </div>
    );
  }


export default Home;

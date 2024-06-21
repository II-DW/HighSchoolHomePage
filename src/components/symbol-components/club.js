import './club.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import clublogo from '../../img/clublogo.png'
import ClubIndex from './club-components/ClubIndex.js';
import ClubLineup from './club-components/ClubLineup.js';


import React, { useState } from 'react';
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

function Club() {
  const [data_club_1, setData1] = useState(true);
  const [data_club_2, setData2] = useState(false);
  const [data_club_3, setData3] = useState(false);
  const Clicked = () => {
    setData1((check) => true)
    setData2((check) => false)
    setData3((check) => false)
  };

  const Clicked2 = () => {
    setData1((check) => false)
    setData2((check) => true)
    setData3((check) => false)
  };


    return (
      <div className = 'Body-club'>
          <div className='Maincontent-club'>
            <Desktop>
              <div className='ClubTitle-club'>
                <img alt='face' src={clublogo} className="ClubImage" />
                <div className='ClubName-club'>
                  <span style={{fontWeight:"bold", fontSize:"1.5vw"}}>Manchester United</span>
                  <span style={{fontWeight:"5", fontSize:"1vw"}}>Class 306</span>
                </div>
              </div>
            </Desktop>

            <Tablet>
            <div className='ClubTitle-club'>
                <img alt='face' src={clublogo} className="ClubImage" />
                <div className='ClubName-club'>
                  <span style={{fontWeight:"bold", fontSize:"1.5vw"}}>Manchester United</span>
                  <span style={{fontWeight:"5", fontSize:"1vw"}}>Class 306</span>
                </div>
              </div>
            </Tablet>

            <Mobile>
              <div className='ClubTitle-club'>
                <img  alt='face' src={clublogo} className="ClubImage" style={{width:"6vh", height:"6vh"}}/>
                <div className='ClubName-club'>
                  <span style={{fontWeight:"bold", fontSize:"2vh"}}>Manchester United</span>
                  <span style={{fontWeight:"5", fontSize:"1.5vh"}}>Class 306</span>
                </div>
              </div>
            </Mobile>
            
            <div className='ClubNav-club'>
              <ul>
                <li onClick={Clicked}><span className='NavText-club'>팀 개요</span> <div className="line-club"></div></li>
                <li onClick={Clicked2}><span className='NavText-club'>스쿼드</span> <div className="line-club"></div></li>
              </ul>
              
            </div>
            
          </div>        

          <div> {data_club_1 && <ClubIndex />} {data_club_2 && <ClubLineup />}</div>
        
      </div>
    );
  }


export default Club;

import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import daegunlogo from './img/daegunlogo.png';
import { FaInstagram } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
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


function Footer() {
    return (
        
    
    <div className = 'Footer'>
      <Desktop>
        <ProgressBar now={60} />
          <div className='FooterBox'>
            
          </div>
          <div className='FooterBox'>
              <hr className = 'line'></hr>
          </div>
          <div className='FooterBox'>
            <img src={daegunlogo} className='daegunlogo'></img>
            <div className='IconBox'><span className='FooterTxt'>© 2024 DaegunHighSchool, class 306</span></div>
            <div className='IconBox'><FaInstagram size='25'/></div>
            

            </div>
          </Desktop>


          <Mobile>
          <ProgressBar now={60} />
          <div className='FooterBox'>
            
          </div>
          <div className='FooterBox'>
              <hr className = 'line'></hr>
          </div>
          <div className='FooterBox'>
            <img src={daegunlogo} className='daegunlogo' style={{width:"10vw"}}></img>
            <div className='IconBox' style={{width:"40vw", paddingLeft:"10vw"}}><span className='FooterTxt' style={{fontSize:"2vw"}}>© 2024 DaegunHighSchool, class 306</span></div>
            <div className='IconBox'style={{paddingLeft:"10vw"}}><FaInstagram size='25'/></div>
            

            </div>
          </Mobile>
        </div>
        
    );  
  }


export default Footer;


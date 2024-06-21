import './Header.css'
import daegun from './img/daegun.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
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

function Header() {
    return (
        
        
        <div className = 'Header'>
          <Desktop>
            <div className='HeaderBox'>
              
              <div className='TitleBox'>
                <a href='/HighSchoolHomePage/home'><img alt='face' src={daegun} className='daegun'/></a>
              </div>
              
              
              <Link className='Link-Head' to="./home">Home</Link>
              <Link className='Link-Head' to='/symbol'>상징</Link>
              <Link className='Link-Head' to='./gallery'>사진첩</Link>
              <Link className='Link-Head' >외부링크</Link>

            </div>

          </Desktop >


            <Mobile>
              <div className='HeaderBox'style={{paddingLeft:"0"}}>

                <div className='TitleBox' >
                  <a href='./home'><img alt='face' src={daegun} className='daegun'style={{marginRight:"60vw", width:"30vw"}}/></a>
                </div>


                <input type="checkbox" className='icon' id='icon' /> 
                <label for="icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className='header-nav' id='header-nav'>
                  <ul className='LinkList-Mob'>
                    <li><Link to="./home">Home</Link></li>
                    <li><Link to="./symbol">상징</Link></li>
                    <li><Link to="./gallery">사진첩</Link></li>
                    <li><Link to="./">외부링크</Link></li>
                  </ul>
                </div> 

                  
                

              </div>

              <div className='HeaderBox' style={{paddingLeft:"0"}}>
                  <hr className = 'line'style={{width:"100vw"}}></hr>
                </div>
            </Mobile>


            <Tablet>
            <div className='HeaderBox'>
              
              <div className='TitleBox'>
                <a href='./home'><img alt='face' src={daegun} className='daegun' style={{marginRight:"40vw"}}/></a>
              </div>
              
              <Link className='Link-Head' to="./home">Home</Link>
              <Link className='Link-Head' to='/symbol'>상징</Link>
              <Link className='Link-Head' to='./gallery'>사진첩</Link>
              <Link className='Link-Head' >외부링크</Link>
            </div>
            <div className='HeaderBox'>
              <hr className = 'line'></hr>
            </div>
            </Tablet>
          </div>
          
    );  
  }


export default Header;


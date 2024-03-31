import './Header.css'
import daegun from './img/daegun.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap'; // 꼭 import를 해와야한다
import { BrowserRouter as Router, Route, Switch, Link,useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const currentUrl = location.pathname;
    return (
        
        
        <div className = 'Header'>
          <Desktop>
            <div className='HeaderBox'>
              
              <div className='TitleBox'>
                <a href='/HighSchoolHomePage/home'><img src={daegun} className='daegun'/></a>
              </div>
              
              <Nav variant="pills">
              <Nav.Item>
                <Nav.Link active={currentUrl === '/HighSchoolHomePage/home' && true} href="/HighSchoolHomePage/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="link-1" active={currentUrl === '/HighSchoolHomePage/symbol' && true} href='/HighSchoolHomePage/symbol'>상징</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" active={currentUrl === '/HighSchoolHomePage/perfomance' && true} href='/HighSchoolHomePage/perfomance'>실적</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">외부링크</Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
            <div className='HeaderBox'>
              <hr className = 'line'></hr>
            </div>
          </Desktop >


            <Mobile>
              <div className='HeaderBox'style={{paddingLeft:"0"}}>

                <div className='TitleBox' >
                  <a href='/HighSchoolHomePage/home'><img src={daegun} className='daegun'style={{marginRight:"60vw", width:"30vw"}}/></a>
                </div>

                <div className='modal__background' id='modal'/>

                <input type="checkbox" className='icon' id='icon' /> 
                <label for="icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <div className='header-nav' id='header-nav'>
                  <ul className='LinkList-Mob'>
                    <li><a href='/HighSchoolHomePage/home'>Home</a></li>
                    <li><a href='/HighSchoolHomePage/symbol'>상징</a></li>
                    <li><a href='/HighSchoolHomePage/perfomance'>실적</a></li>
                    <li><a href='#'>외부링크</a></li>
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
                <a href='/HighSchoolHomePage/home'><img src={daegun} className='daegun' style={{marginRight:"40vw"}}/></a>
              </div>
              
              <Nav variant="pills">
              <Nav.Item>
                <Nav.Link active={currentUrl === '/HighSchoolHomePage/home' && true} href="/HighSchoolHomePage/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link eventKey="link-1" active={currentUrl === '/HighSchoolHomePage/symbol' && true} href='/HighSchoolHomePage/symbol'>상징</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" active={currentUrl === '/HighSchoolHomePage/perfomance' && true} href='/HighSchoolHomePage/perfomance'>실적</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">외부링크</Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
            <div className='HeaderBox'>
              <hr className = 'line'></hr>
            </div>
            </Tablet>
          </div>
          
    );  
  }


export default Header;


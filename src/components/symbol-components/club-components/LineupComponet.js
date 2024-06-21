
import './ClubLineup.css';

import user from '../../../img/user.png'
import flag from '../../../img/korea.svg';


import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function LineUpComponent(props) {

    return (

        <div className='Profile-LineUp'>
            <Desktop>
                <div style={{display:'flex', flexFlow:"row"}}>
                    <img src={user} alt='face' className="Profileimg-Lineup"/>
                    <div style={{display:'flex', flexFlow:"column", justifyContent:"center", alignItems:"center"}}>

                        <span style={{fontWeight:"bold", fontSize:"1vw"}}>{props.name}</span>
                        <div style={{display:'flex', flexFlow:"row", justifyContent:"center", alignItems:"center", paddingLeft:"1vw"}}>
                            <img src={flag} alt='face' className="Profileimg2-Lineup"/>
                            <span style={{fontWeight:"1", fontSize:"0.8vw", marginLeft:"0.1vw"}}>대한민국</span>
                        </div>
                    </div>
                </div>
            </Desktop>

            <Mobile>
            <div style={{display:'flex', flexFlow:"row"}}>
                    <img src={user} alt='face' className="Profileimg-Lineup"/>
                    <div style={{display:'flex', flexFlow:"column", justifyContent:"center", alignItems:"center"}}>

                        <span style={{fontWeight:"bold", fontSize:"2vh"}}>{props.name}</span>
                        <div style={{display:'flex', flexFlow:"row", justifyContent:"center", alignItems:"center", paddingLeft:"1vw"}}>
                            <img src={flag} alt='face' className="Profileimg2-Lineup"/>
                            <span style={{fontWeight:"1", fontSize:"1vh", marginLeft:"0.5vw"}}>대한민국</span>
                        </div>
                    </div>
                </div>
            </Mobile>
        </div>

    );
  }


export default LineUpComponent;

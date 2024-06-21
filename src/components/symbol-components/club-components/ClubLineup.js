
import './ClubLineup.css';

import user from '../../../img/user.png'
import { useMediaQuery } from 'react-responsive'
import flag from '../../../img/korea.svg';
import LineUpComponent from './LineupComponet';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}


function ClubIndex() {

    return (
      <div className = 'Body-club-LineUp'>
        <div className = "Maincontent-club-LineUp">
            <span className='Title-Lineup'>Gkp.</span>
            <LineUpComponent name="김태후"/>
        </div>


        <Desktop>
        <div className = "Maincontent-club-LineUp">
            <span className='Title-Lineup'>Def.</span>
            <div style={{display:"flex", flexFlow:"row", paddingRight:"1vw"}}>
              <LineUpComponent name="구제왕"/>
              <LineUpComponent name="정인석"/>
              <LineUpComponent name="김용빈"/>
              <LineUpComponent name="김강림"/>
            </div>
         </div>
        </Desktop>

        <Mobile>
        <div className = "Maincontent-club-LineUp" style={{height:"35vh"}}>
            <span className='Title-Lineup'>Def.</span>
            <div style={{display:"flex", flexFlow:"row", paddingRight:"1vw"}}>
            <div style={{display:"flex", flexFlow:"column"}}>
                <LineUpComponent name="구제왕"/>
                <LineUpComponent name="정인석"/>
              </div>
              <div style={{display:"flex", flexFlow:"column"}}>
                <LineUpComponent name="김용빈"/>
                <LineUpComponent name="김강림"/>
              </div>
            </div>
         </div>

        </Mobile>            

        <Desktop>
        <div className = "Maincontent-club-LineUp">
            <span className='Title-Lineup'>Mid.</span>
            <div style={{display:"flex", flexFlow:"row", paddingRight:"1vw"}}>
              <LineUpComponent name="최준우"/>
              <LineUpComponent name="임유석"/>
              <LineUpComponent name="이원호"/>
              <LineUpComponent name="정해섭"/>
            </div>
         </div>
        </Desktop>

        <Mobile>
        <div className = "Maincontent-club-LineUp" style={{height:"35vh"}}>
            <span className='Title-Lineup'>Mid.</span>
            <div style={{display:"flex", flexFlow:"row", paddingRight:"1vw"}}>
            <div style={{display:"flex", flexFlow:"column"}}>
                <LineUpComponent name="최준우"/>
                <LineUpComponent name="임유석"/>
              </div>
              <div style={{display:"flex",flexFlow:"column"}}>
                <LineUpComponent name="김용빈"/>
                <LineUpComponent name="정해섭"/>
              </div>
            </div>
         </div>

        </Mobile>            

        <div className = "Maincontent-club-LineUp">
            <span className='Title-Lineup'>Fwd.</span>
            <div style={{display:"flex", flexFlow:"row"}}>
                <LineUpComponent name="최효제"/>
            </div>
        </div>
      </div>
    );
  }


export default ClubIndex;

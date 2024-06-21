import './Gallery.css'
import ImgComponent from './Img-components/Imgcomponent.js';
import { useMediaQuery } from 'react-responsive'

import Img1 from '../img/gallery/img1.jpg'
import Img2 from '../img/gallery/img2.jpg'
import Img3 from '../img/gallery/img3.jpg'
import Img4 from '../img/gallery/img4.jpg'
import Img5 from '../img/gallery/img5.jpg'






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


function Perfomance() {

    return (
        
        <div className='MainPage'>
        <div className = 'Body-gallery'>
            <Desktop>
           <img className="Img-gallery" alt='face' src={Img1} style={{objectPosition:"center -25vw"}}/>
           <span className="Text-gallery">2024년, 우리들의 이야기</span>
           </Desktop>
           
           <Tablet>
           <img className="Img-gallery" alt='face' src={Img1} style={{height:"80vw"}}/>
           <span className="Text-gallery" style={{top:"-20rem", fontSize:"6.5vh"}}>2024년, 우리들의 이야기</span>
           </Tablet>

           <Mobile>
           <img className="Img-gallery" alt='face' src={Img1} style={{objectPosition:"center -10rem"}}/>
           <span className="Text-gallery" style={{top:"-17.5rem", fontSize:"4vh"}}>2024년, 우리들의 이야기</span>
           </Mobile>
            <hr className='Line-gallery'/>


            <Desktop>
              <div className="ImgBody-gallery">
                <div className="Img_S_Body_gallery">
                  <ImgComponent margin='0.5vw' img={Img1} imgsize="23vw" txtsize="2vw" marginsize="0"topsize="-13vw"/>
                  <ImgComponent margin='5vw' img={Img2} imgsize="23vw"txtsize="2vw" marginsize="0"topsize="-13vw"/>
                  <ImgComponent margin='5vw' img={Img3} imgsize="23vw"txtsize="2vw" marginsize="0"topsize="-13vw"/>
                  <span className='inline-gallery'/>
                  <ImgComponent margin='0.5vw' img={Img4} imgsize="23vw" txtsize="2vw" marginsize="0"topsize="-13vw"/>
                  <ImgComponent margin='5vw' img={Img5} imgsize="23vw"txtsize="2vw" marginsize="0"topsize="-13vw"/>
                </div>
                
              </div>
            </Desktop>

            <Mobile>
            <div className="ImgBody-gallery">
                <div className="Img_S_Body_gallery" style={{flexFlow:'column'}}>
                  <ImgComponent img={Img1} imgsize="80vw" txtsize="12.5vw" marginsize="22.5vw"topsize="-50vw"/>
                  <ImgComponent img={Img2} imgsize="80vw"txtsize="12.5vw" marginsize="22.5vw"topsize="-50vw"/>
                  <ImgComponent img={Img3} imgsize="80vw"txtsize="12.5vw" marginsize="22.5vw" topsize="-50vw"/>
                  <ImgComponent img={Img4} imgsize="80vw"txtsize="12.5vw" marginsize="22.5vw" topsize="-50vw"/>
                  <ImgComponent img={Img5} imgsize="80vw"txtsize="12.5vw" marginsize="22.5vw" topsize="-50vw"/>
                </div>
                
              </div>
            </Mobile>




          </div>
        </div>
    );  
  }


export default Perfomance;

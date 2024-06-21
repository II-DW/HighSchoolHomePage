
import './ClubIndex.css';
import clublogo from '../../../img/clublogo.png'

import logo301 from '../../../img/logo301.svg';
import logo302 from '../../../img/logo302.svg';
import logo303 from '../../../img/logo303.svg';
import logo304 from '../../../img/logo304.svg';
import logo305 from '../../../img/logo305.svg';
import logo307 from '../../../img/logo307.svg';

import { useMediaQuery } from 'react-responsive'


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
      <div className = 'Body-club-Index'>
        <Desktop >
          <div style={{display:"flex", flexFlow:"row"}}>
            <div className='Maincontent-club-Index'>
              <span style={{paddingLeft:"1vw", paddingTop:"1.5vh", fontSize:"1vw"}}>UBUNTU</span>
            
              <div style={{paddingLeft:"1vw", paddingTop:"1vh"}}>
                <div>
                  <span style={{fontSize:"1.3vw"}}>Grp.A</span>
                  <span style={{ marginLeft:"11vw", fontSize:"1vw"}}>경기</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>승</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>무</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>패</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>+/-</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>승점</span>
                </div>
                <hr style={{width:"27.5vw", height:"1vh", margin:"0"}}></hr>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'/>
                  <span style={{marginTop:"1.7vh", marginLeft:"1vw", fontSize:"1vw"}}>1</span>
                  <img alt='face' src={logo301} style={{marginTop:"1.5vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.7vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 301</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>4</span>
                </div>


                

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1vw"}}>2</span>
                  <img alt='face' src={logo302} style={{marginTop:"1vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 302</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.8vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>2</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' style={{borderColor:"red"}}/>
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw" , fontSize:"1vw"}}>3</span>
                  <img  alt='face' src={logo305} style={{marginTop:"1vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw" , fontSize:"1vw"}}>Class 305</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"4.9vw" , fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw" , fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.5vw" , fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.3vw" , fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>-1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw" , fontSize:"0.8vw"}}>1</span>
                </div>
                

                
              </div>

              

              <div style={{paddingLeft:"1vw", paddingTop:"3vh"}}>
                <div>
                  <span style={{fontSize:"1.3vw"}}>Grp.B</span>
                  <span style={{ marginLeft:"11vw" , fontSize:"1vw"}}>경기</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>승</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>무</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>패</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>+/-</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1vw"}}>승점</span>
                </div>
                <hr style={{width:"27.5vw", height:"1vh", margin:"0"}}></hr>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'/>
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1w"}}>1</span>
                  <img alt='face'src={logo307} style={{marginTop:"2vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 307</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>3</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>6</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1vw"}}>2</span>
                  <img  alt='face' src={logo303} style={{marginTop:"1.5vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.2vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 303</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>3</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.2vh", marginLeft:"1.8vw", fontSize:"0.8vw"}}>4</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'style={{borderColor:"red"}}/>
                  <span style={{marginTop:"2.2vh", marginLeft:"1vw", fontSize:"1vw"}}>3</span>
                  <img alt='face' src={logo304} style={{marginTop:"2vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.2vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 304</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>3</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>-2</span>
                  <span style={{marginTop:"2.2vh", marginLeft:"2vw", fontSize:"0.8vw"}}>4</span>
                </div>

                



                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' style={{borderColor:"red"}}/>
                  <span style={{marginTop:"1.7vh", marginLeft:"1vw", fontSize:"1vw"}}>4</span>
                  <img alt='face' src={clublogo} style={{marginTop:"1.5vh", width:"1.5vw", height:"1.5vw", marginLeft:"1vw"}} />
                  <span style={{marginTop:"1.7vh", marginLeft:"1vw", fontSize:"1vw"}}>Class 306</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"4.9vw", fontSize:"0.8vw"}}>3</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>0</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"1.5vw", fontSize:"0.8vw"}}>2</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"1.3vw", fontSize:"0.8vw"}}>1</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>-1</span>
                  <span style={{marginTop:"1.7vh", marginLeft:"2vw", fontSize:"0.8vw"}}>2</span>
                </div>

                

                
              </div>
            </div>  







            <div style={{display:"flex", flexFlow:"column"}}>
              <div className='Maincontent-club-Index' style={{marginLeft:"2.5vw", width:"17.5vw", height:"18vh"}}>
                <span style={{paddingLeft:"1vw", paddingTop:"1vh", fontSize:"1vw"}}>다음 경기</span>
                <div style={{display:"flex", flexFlow:"row", justifyContent:"center", alignItems:"center", paddingTop:"3vh"}}>

                  <div style={{display:"flex", flexFlow:"column", alignItems:"center", marginRight:"2vw"}}>
                    <img alt='face' src={clublogo} style={{width:"3vw", height:"3vw", fontSize:"1vw"}} />
                    <span style={{fontSize:"1vw"}}>Class 307</span>
                  </div>
                  <span style={{marginRight:"2vw", fontSize:"1vw"}}>
                    vs
                  </span>
                  <div style={{display:"flex", flexFlow:"column", alignItems:"center"}}>
                    <img alt='face' src={logo303} style={{width:"3vw", height:"3vw"}} />
                    <span style={{fontSize:"1vw"}}>Class 307</span>
                  </div>
                </div>
              </div>
              <div className='Maincontent-club-Index' style={{marginLeft:"2.5vw", width:"17.5vw", height:"42vh"}}>
                <span style={{paddingLeft:"1vw", paddingTop:"1vh"}}>팀 기록</span>
                
              </div>      
            </div>     
          </div>
        </Desktop>

        <Mobile>
        <div style={{display:"flex", flexFlow:"column"}}>
            <div className='Maincontent-club-Index' style={{width:"50vw", height:"72vh"}}>
              <span style={{paddingLeft:"1vw", paddingTop:"1.5vh", fontSize:"2vw"}}>UBUNTU</span>
            
              <div style={{paddingLeft:"1vw", paddingTop:"1vh"}}>
                <div>
                  <span style={{fontSize:"2.3vw"}}>Grp.A</span>
                  <span style={{ marginLeft:"20vw", fontSize:"1.3vh"}}>경기</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>승</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>무</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>패</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>+/-</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>승점</span>
                </div>
                <hr style={{width:"47.5vw", height:"1vh", margin:"0"}}></hr>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' />
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>1</span>
                  <img  alt='face' src={logo301} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 301</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw", fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>4</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>2</span>
                  <img alt='face' src={logo302} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 302</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw", fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>2</span>
                </div>

                

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' style={{borderColor:"red"}}/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>3</span>
                  <img  alt='face' src={logo305} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 305</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2vw", fontSize:"1.5vh"}}>-1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>1</span>
                </div>

                

                
              </div>

              

              <div style={{paddingLeft:"1vw", paddingTop:"3vh"}}>
              <div>
                  <span style={{fontSize:"2.3vw"}}>Grp.B</span>
                  <span style={{ marginLeft:"20vw", fontSize:"1.3vh"}}>경기</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>승</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>무</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>패</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>+/-</span>
                  <span style={{ marginLeft:"1vw", fontSize:"1.3vh"}}>승점</span>
                </div>
                <hr style={{width:"47.5vw", height:"1vh", margin:"0"}}></hr>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>1</span>
                  <img alt='face'  src={logo307} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 307</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>3</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw", fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>6</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI'/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>2</span>
                  <img alt='face' src={logo303} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 304</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>3</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw", fontSize:"1.5vh"}}>4</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>4</span>
                </div>

                



                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' style={{borderColor:"red"}}/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>3</span>
                  <img alt='face' src={logo304} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 303</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>3</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw", fontSize:"1.5vh"}}>-2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>4</span>
                </div>

                <div style={{display:"flex", flexFlow:"row", alignContent:"center"}}>
                  <div className='VeLine-CI' style={{borderColor:"red"}}/>
                  <span style={{marginTop:"2vh", marginLeft:"1vw" , fontSize:"2vh"}}>4</span>
                  <img alt='face' src={clublogo} style={{marginTop:"2vh", width:"3vh", height:"3vh", marginLeft:"1vw"}} />
                  <span style={{marginTop:"2.6vh", marginLeft:"1.5vw" , fontSize:"1.5vh"}}>Class 306</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"5.1vw" , fontSize:"1.5vh"}}>3</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2.5vw" , fontSize:"1.5vh"}}>0</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.8vw" , fontSize:"1.5vh"}}>2</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"1.3vw" , fontSize:"1.5vh"}}>1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"2vw", fontSize:"1.5vh"}}>-1</span>
                  <span style={{marginTop:"2.6vh", marginLeft:"3vw" , fontSize:"1.5vh"}}>2</span>
                </div>

                
              </div>
            </div>  







            <div style={{display:"flex", flexFlow:"column"}}>
              <div className='Maincontent-club-Index' style={{height:"18vh", width:"50vw"}}>
                <span style={{paddingLeft:"1vw", paddingTop:"1vh", fontSize:"2vh"}}>다음 경기</span>
                <div style={{display:"flex", flexFlow:"row", justifyContent:"center", alignItems:"center", paddingTop:"3vh"}}>

                  <div style={{display:"flex", flexFlow:"column", alignItems:"center", marginRight:"2vw"}}>
                    <img alt='face' src={clublogo} style={{width:"6vh", height:"6vh"}} />
                    <span style={{fontSize:"2vh"}}>Class 306</span>
                  </div>
                  <span style={{marginRight:"2vw", fontSize:"2vh"}}>
                    vs
                  </span>
                  <div style={{display:"flex", flexFlow:"column", alignItems:"center"}}>
                    <img alt='face' src={logo307} style={{width:"6vh", height:"6vh"}} />
                    <span style={{fontSize:"2vh"}}>Class 307</span>
                  </div>
                </div>
              </div>
            </div>     
          </div>
        </Mobile>
      </div>
    );
  }


export default ClubIndex;

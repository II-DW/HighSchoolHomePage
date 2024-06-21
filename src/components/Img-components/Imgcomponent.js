import './Img.css'
import donwloadButton from '../../img/download-button.png'


function ImgComponent(props) {

    return (

        <div className='ImgCom-gallery' style={{marginLeft:props.margin, width:props.imgsize, height:props.imgsize}}>
            <img className="Img_main-gallery" alt='face'  src={props.img} style={{width:props.imgsize, height:props.imgsize}}></img>
            <span className="Img_describe-gallery" style={{fontSize:props.txtsize, top:props.topsize}}>2024.04.04.</span>
            <a href={props.img} className="Img_describe-gallery" style={{marginLeft:"4vw", width:"2vw", height:"2vw", top:props.topsize}} download>
                <img className="Button_Download-gallery" src={donwloadButton} style={{width:props.txtsize, height:props.txtsize, marginLeft:props.marginsize}}alt='face'/>
            </a>
        </div>

    );
  }


export default ImgComponent;

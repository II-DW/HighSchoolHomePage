import './club.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import clublogo from '../../img/clublogo.png'
function Club() {

    return (
      <div className = 'Body-club'>
          <span className="title-club">우분투</span>
          <hr className='Line-club'></hr>
          <div className='Maincontent-club'>
            <img src={clublogo} className="ClubImage" />
            <div className='BoxInBox-club'></div>
          </div>                
        
      </div>
    );
  }


export default Club;

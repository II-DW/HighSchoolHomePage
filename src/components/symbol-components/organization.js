import './organization.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Organ() {

    return (
      <div className = 'Body-organ'>
        <div className='Box-organ'>
          <div className = "Box_title-organ">
            <span className='title-organ'>담임선생님</span>
          </div>
          <div className = "Box_name-organ">
            <span className='name-organ'>나호원</span> <span className='name2-organ'>선생님</span>
          </div>
        </div>

        <div className='Box-organ'>
          <div className = "Box_title-organ" style={{backgroundColor:'#D895DA'}}>
            <span className='title-organ'>회장</span>
          </div>
          <div className = "Box_name-organ">
            <span className='name-organ'>이희재</span>
          </div>
        </div>

        <div className='Box-organ'>
          <div className = "Box_title-organ" style={{backgroundColor:'#8B93FF'}}>
            <span className='title-organ'>부회장</span>
          </div>
          <div className = "Box_name-organ">
            <span className='name-organ'>정해섭</span>
          </div>
        </div>

        <div className='Boxes-organ'>
          <div className='Box-organ'>
            <div className = "Box_title-organ" style={{backgroundColor:'#90D26D'}}>
              <span className='title-organ'>정보부</span>
            </div>
            <div className = "Box_name-organ">
              <span className='name-organ'>이도원</span>
            </div>
          </div>  

          <div className='Box-organ'>
            <div className = "Box_title-organ" style={{backgroundColor:'#90D26D'}}>
              <span className='title-organ'>학습부</span>
            </div>
            <div className = "Box_name-organ">
              <span className='name-organ'>이도원</span>
            </div>
          </div>

          <div className='Box-organ'>
            <div className = "Box_title-organ" style={{backgroundColor:'#90D26D'}}>
              <span className='title-organ'>교육부</span>
            </div>
            <div className = "Box_name-organ">
              <span className='name-organ'>이도원</span>
            </div>
          </div>

          <div className='Box-organ'>
            <div className = "Box_title-organ" style={{backgroundColor:'#90D26D'}}>
              <span className='title-organ'>여가부</span>
            </div>
            <div className = "Box_name-organ">
              <span className='name-organ'>이도원</span>
            </div>
          </div>
        </div>

      </div>
    );
  }


export default Organ;

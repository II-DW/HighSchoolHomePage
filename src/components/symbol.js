import './symbol.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Club from './symbol-components/club';
import Learning from './symbol-components/learning';
import Organ from './symbol-components/organization';

import React, { useState } from 'react';

function Symbol() {
    const [data1, setData1] = useState(true);
    const [data2, setData2] = useState(false);
    const [data3, setData3] = useState(false);
    const Clicked = () => {
      setData1((check) => true)
      setData2((check) => false)
      setData3((check) => false)
    };

    const Clicked2 = () => {
      setData1((check) => false)
      setData2((check) => true)
      setData3((check) => false)
    };

    const Clicked3 = () => {
      setData1((check) => false)
      setData2((check) => false)
      setData3((check) => true)
    };


    return (
        
        <div className='MainPage'>
          


          <div className = 'Body-symbol'>
              <div className="Nav-symbol">
                <ListGroup defaultActiveKey="#link1">
                  <ListGroup.Item action href="#link1" onClick={Clicked}>
                    급훈
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" onClick={Clicked2}>
                    조직도
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3" onClick={Clicked3}>
                    우분투
                  </ListGroup.Item>
                </ListGroup> 
              </div>

              <div class='v-line'></div>


              <div className='Maincontent-symbol'> {data1 && <Learning />} {data2 && <Organ />} {data3 && <Club />}
              </div>                
            
          </div>

        </div>
    );
  }


export default Symbol;

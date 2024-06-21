import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes  } from "react-router-dom";

import Header from './Header.js';
import Footer from './Footer.js';

import Home from './components/home.js';
import Symbol from './components/symbol.js';
import Gallery from './components/Gallery.js';
import NotFound from './components/404.js';

function App() {
    
    return (
      
        <div className='MainPage'>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} component={() => <redirect to='/home' />}/>
            <Route path="symbol" element={<Symbol />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          
          <Footer />
        </div>
    );
  }


export default App;

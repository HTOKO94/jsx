import React from 'react';
import './style.css'
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw"}} className="App">
    <h1 className="title red">Hamza Toukabri</h1> <br />
    <img src={imageInSrc} alt="srcimg" /> <br/>
    <img src="/Hamza.jpg" alt="publicimg" /> <br />
    <video width="320" height="240" controls >
    <source src="/Videos/morgan.mp4" type="video/mp4"/>
    </video>
    </div>
    
  );
}

export default App;

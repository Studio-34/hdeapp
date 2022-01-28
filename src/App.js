import './App.css';
// import 'https://player.vimeo.com/api/player.js'
import Video from './Comps/Video';
import Pitch from './Comps/Pitch';
import Keys from './Comps/Keys';
// import Card from './Comps/Card';
import Header from './Comps/Header';
import Pricing from './Comps/Pricing';
import Navbar from './Comps/Navbar';
import Slider from './Comps/Slider';
import ImageOne from './img/SlideShow/Img1.png';
import ImageTwo from './img/SlideShow/Img2.png';
import ImageThree from './img/SlideShow/Img3.png';
import ImageFour from './img/SlideShow/Img4.png';
import ImageFive from './img/SlideShow/Img5.png';
import ImageSix from './img/SlideShow/Img6.png';

function App() {
  return (
    <div className="App mx-auto">
      <div className='sticky-top'>
        <Navbar />
      </div>
      <Header />
      <Slider 
        interval={3000}
        overlay={'./img/Overlay.png'}
        images={[
          './img/Img1.png',
          './img/Img2.png',
          './img/Img3.png',
          './img/Img4.png',
          './img/Img5.png',
          './img/Img6.png'
        ]}
      />
      <Video />
      <Pitch />
      <Keys />
      <Pricing />
    </div>
  );
}

export default App;

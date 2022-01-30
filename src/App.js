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

function App() {
  return (
    <div className="App mx-auto">
      <div className='sticky-top'>
        <Navbar />
      </div>
      <Header />
      <Slider 
        interval={3000}
        overlay={'./img/iPad-Pro-Mockup_Frame.png'}
        images={[
          './img/iPad-Pro-Dark-Mockup_Barrel.jpg',
          './img/iPad-Pro-Dark-Mockup_Baseball.jpg',
          './img/iPad-Pro-Dark-Mockup_Basketball.jpg',
          './img/iPad-Pro-Dark-Mockup_Jumper.jpg',
          './img/iPad-Pro-Dark-Mockup_Soccer.jpg',
          './img/iPad-Pro-Dark-Mockup_Yearling.jpg'
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

import './App.css';
// import 'https://player.vimeo.com/api/player.js'
import Video from './Comps/Video';
import Pitch from './Comps/Pitch';
import Keys from './Comps/Keys';
// import Card from './Comps/Card';
import Header from './Comps/Header';
import Pricing from './Comps/Pricing';
import Navbar from './Comps/Navbar';

function App() {
  return (
    <div className="App mx-auto">
      <div className='sticky-top'>
        <div>
          <Navbar />
        </div>
      </div>
      <div className="mx-auto scrollable scrollsypy-examble" data-bs-spy="scroll" data-bs-target="#navbar1" data-bs-offset="0" tab-index="0">
        <Header />
        <Video />
        <Pitch />
        <Keys />
        <Pricing />
      </div>
    </div>
  );
}

export default App;

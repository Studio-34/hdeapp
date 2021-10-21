import './App.css';
import Video from './Comps/Video';
import Pitch from './Comps/Pitch';
import Keys from './Comps/Keys';
// import Card from './Comps/Card';
import Header from './Comps/Header';
import Pricing from './Comps/Pricing';

function App() {
  return (
    <div className="App container">
      <Header />
      <Video />
      <Pitch />
      <Keys />
      <Pricing />
    </div>
  );
}

export default App;

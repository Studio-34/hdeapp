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

  const slideInfo = [
    {
      image: './img/iPad-Pro-Dark-Mockup_Barrel.jpg',
      rating: 5,
      review: 'I love using this app to video at my rodeos. It helps me put all of my runs in one video that I can text to friends and family.',
      name: 'Paige'
    },
    {
      image: './img/iPad-Pro-Dark-Mockup_Baseball.jpg',
      rating: 5,
      review: 'This thing lets me add every at-bat from my son’s game into one video, and also have his stats and team logo in the footer. I love it!!',
      name: 'Danny'
    }
  ];

  const images = slideInfo.map( a => a.image);
  const stars = slideInfo.map( a => a.rating);
  const review = slideInfo.map( a => a.review);
  const name = slideInfo.map( a => a.name);
  console.log (images);

  return (
    <div className="App mx-auto">
      <div className='sticky-top'>
        <Navbar />
      </div>
      {/* <Header /> */}
      <Slider 
        interval={3000}
        overlay={'./img/iPad-Pro-Mockup_Frame.png'}
        stars={stars}
        review={review}
        name={name}
        // slideInfo={slideInfo}
        // images={[
        //   './img/iPad-Pro-Dark-Mockup_Barrel.jpg',
        //   './img/iPad-Pro-Dark-Mockup_Baseball.jpg',
        //   './img/iPad-Pro-Dark-Mockup_Basketball.jpg',
        //   './img/iPad-Pro-Dark-Mockup_Jumper.jpg',
        //   './img/iPad-Pro-Dark-Mockup_Soccer.jpg',
        //   './img/iPad-Pro-Dark-Mockup_Yearling.jpg'
        // ]}
        images={images}
      />
      <Video />
      <Pitch />
      <Keys />
      <Pricing />
    </div>
  );
}

export default App;

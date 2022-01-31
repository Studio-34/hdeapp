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
import About from './Comps/About';
import Home from './Comps/Home';

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
    },
    {
      image: './img/iPad-Pro-Dark-Mockup_Yearling.jpg',
      rating: 5,
      review: 'With this app I can create great quality sale videos, without the cost or scheduling headache of hiring a videographer. ',
      name: 'Kayla'
    },
    {
      image: './img/iPad-Pro-Dark-Mockup_Soccer.jpg',
      rating: 5,
      review: 'It’s so convenient to be able to post my daughter’s highlights in one single video on social media. Add in the fact that I can add her info and team logo, this app is amazing!',
      name: 'Meagan'
    },
    {
      image: './img/iPad-Pro-Dark-Mockup_Jumper.jpg',
      rating: 5,
      review: 'We use this app for our horse racing partnership. It allows trainers in multiple locations to gather media throughout the month, and delivers the videos to us with our logo in the footer to give them a professional touch.',
      name: 'Steve'
    },
  ];

  const images = slideInfo.map( a => a.image);
  const stars = slideInfo.map( a => a.rating);
  const review = slideInfo.map( a => a.review);
  const name = slideInfo.map( a => a.name);

  return (
    <div className="App mx-auto">
      <div className='sticky-top'>
        <Navbar />
      </div>
      {/* <Header /> */}
      <Home />
      <Slider 
        interval={4000}
        overlay={'./img/iPad-Pro-Mockup_Frame.png'}
        stars={stars}
        review={review}
        name={name}
        images={images}
      />
      <About />
      <Video />
      {/* <Pitch /> */}
      {/* <Keys /> */}
      {/* <Pricing /> */}
    </div>
  );
}

export default App;

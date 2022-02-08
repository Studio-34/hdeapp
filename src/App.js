import './App.scss';
import { Switch, Route, Routes, Link } from "react-router-dom";
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
import Auction from './Comps/Auction';
import Faq from './Comps/Faq';
import Footer from './Comps/Footer';
import Contact from './Comps/Contact';

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
    // {
    //   image: './img/iPad-Pro-Dark-Mockup_Basketball.jpg',
    //   rating: 5,
    //   review: 'Need Review',
    //   name: 'Need Name'
    // },
  ];

  const images = slideInfo.map(a => a.image);
  const stars = slideInfo.map(a => a.rating);
  const review = slideInfo.map(a => a.review);
  const name = slideInfo.map(a => a.name);

  return (
    <Routes>
      <Route path="/" element={
        <>
          <Slider
            interval={5500}
            overlay={'./img/iPad-Pro-Mockup_Frame.png'}
            stars={stars}
            review={review}
            name={name}
            images={images}
          />
          <About />
          <Video
            sectionID="custom"
            videoSection="Custom Videos"
            videoText="The custom section of the app is designed to create videos for both personal and business use. Users can create footer templates with their corporate or team logo and color scheme, and these graphics can be added to the footer of each video published, along with custom text. The users can keep the audio captured while recording, add background music from their device's library, or mute the audio altogether."
            videoID="mainVideo"
            videoLink="https://player.vimeo.com/video/637515772?h=07821083e8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            videoOtherLinks="https://vimeo.com/613887234/344c28c611"
          />
          <Video
            sectionID="auction"
            videoSection="Auction Videos"
            videoText="This section of the app is designed to provide the ultimate streamlined process for submitting marketing videos for auctions. The app administrator gathers information from the auction company such as desired video clips, clip order and duration, and custom graphics. The administrator will also retrieve identifying data relating to the auction items that will be overlaid onto the graphics. From the user's standpoint, all they need to do is gather the clips following the directions within the app, and they're done. This amazing app splices the clips together, adds the custom auction graphics and desired item information onto the footer, uploads the video to Vimeo (hosting website), and emails the video link directly to the auction company. The end result being a uniform, professional quality video that was fast and easy for the user to create, and delivered to the auction company in a format easily shared or embedded on their website or social media. If you're an auction company representative please complete a contact form so we can connect and assist you in placing your next auction on the HDE app."
            videoID="auctionVideo"
            videoLink="https://player.vimeo.com/video/602008665?h=2a2bbb7619&color=ff9933"
            videoOtherLinks="https://vimeo.com/602008665"
          />
          <Faq />
          <Contact />
        </>
      } />
    </Routes>
  );
}

export default App;

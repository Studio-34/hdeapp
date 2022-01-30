import React, { useState, useEffect } from 'react';
import Ratings from '../Comps/Ratings';

export default function Slider({ iPad, overlay, images = [], interval = 3000 }) {
    // const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix];
    const [thumbnails, setThumnails] = useState([]);
    // const interval = 3000;
    // const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + overlay + "'), url('" + images[currentSlide] + "')"
        });


        const loop = setInterval(() => {
            console.log('in loop');
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    return (
        <section>
            <section>
                <Ratings />
            </section>
            <section className="slideshow">
                <div className="slide-holder">
                    {/* <section className="slide previous-slide">
                    <div className="slide-thumbnail"></div>
                </section> */}
                    <section className="slide current-slide">
                        <div style={currentSlideStyle} className="slide-thumbnail"></div>
                    </section>
                    {/* <section className="slide next-slide">
                    <div className="slide-thumbnail"></div>
                </section> */}
                </div>

                {/* <div className="slideshow-controller">
                <span>Previous</span>
                <span>Next</span>
            </div> */}
            </section>
        </section>
    );
}

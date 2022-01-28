import React, { useState, useEffect } from 'react';

export default function Slider({iPad, overlay, images=[], interval=3000}) {
    // const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix];
    const [thumbnails, setThumnails] = useState([]);
    // const interval = 3000;
    const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + overlay + "'), url('" + images[currentSlide] + "')"
        });

        if (currentSlide > 0) {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[currentSlide - 1] + "')"
            });
        } else {
            setPreviousSlideStyle({
                backgroundImage: "url('" + images[images.length - 1] + "')"
            });
        }

        if (currentSlide === images.length - 1) {
            setNextSlideStyle({
                backgroundImage: "url('" + images[0] + "')"
            });
        } else {
            setNextSlideStyle({
                backgroundImage: "url('" + images[currentSlide + 1] + "')"
            });
        }

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


    // // var slideIndex = 0;

    // var [count, setCount] = useState(0);

    // function changePicture() {
    //     if (count = 6) {
    //         setCount(0);
    //     } else {
    //         setCount(count++);
    //     }
    // };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         changePicture();
    //     }, 3);

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    return (
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
    );
}

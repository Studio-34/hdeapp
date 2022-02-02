import React, { useState, useEffect } from 'react';
import Ratings from '../Comps/Ratings';
import { AiFillStar } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap';

// export default function Slider({ overlay, images = [], interval = 3000 }) {
export default function Slider({ overlay, images = [], stars = [], review = [], name = [], interval = 3000 }) {
    // const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix];
    // const [thumbnails, setThumbnails] = useState([]);
    // const interval = 3000;
    // const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    useEffect(() => {
        // setThumbnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('" + overlay + "'), url('" + images[currentSlide] + "')"
        });


        const loop = setInterval(() => {
            // console.log(interval);
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval]);

    let starReview = []

    function StarHelper() {
        for (let i = 0; i < stars[currentSlide]; i++) {
            starReview.push(<AiFillStar />);
        };
    }

    StarHelper();

    console.log(starReview)


    return (
        <section className="slideshow">
            <Row xs={1} md={3} className='justify-content-center'>
                <Col md={8} xs={10} md={{ order: 2 }} className="my-3 text-start d-flex align-items-center">
                {/* <section> */}
                    <Ratings
                        interval={interval[currentSlide]}
                        // stars={stars[currentSlide]}
                        stars={starReview}
                        // slideIndex={currentSlide}
                        review={review[currentSlide]}
                        name={name[currentSlide]}
                    />
                {/* </section> */}
            </Col>
            <Col md={3} xs={10} className='my-3'>
                {/* <section> */}
                    {/* <div className="slide-holder"> */}
                        {/* <section className="slide previous-slide">
                    <div className="slide-thumbnail"></div>
                </section> */}
                            <div style={currentSlideStyle} className="slide-thumbnail"></div>
                        {/* <section className="slide current-slide"> */}
                        {/* </section> */}
                        {/* <section className="slide next-slide">
                    <div className="slide-thumbnail"></div>
                </section> */}
                    {/* </div> */}

                    {/* <div className="slideshow-controller">
                <span>Previous</span>
                <span>Next</span>
            </div> */}
                {/* </section> */}
            </Col>
        </Row>
        </section>
    );
}

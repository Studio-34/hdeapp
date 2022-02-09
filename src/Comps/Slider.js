import React, { useState, useEffect } from 'react';
import Ratings from '../Comps/Ratings';
import { AiFillStar } from 'react-icons/ai'
import { Row, Col } from 'react-bootstrap';

export default function Slider({ overlay, images = [], stars = [], review = [], name = [], interval = 3000 }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});

    function setHeight() {
        const height = document.getElementById('sliderCol')?.clientHeight;
        document.getElementById('reviewCol').style.height = `${height}px`
    }

    useEffect(() => {
        setCurrentSlideStyle({
            backgroundImage: "url('" + overlay + "'), url('" + images[currentSlide] + "')"
        });
        setHeight();
        const loop = setInterval(() => {
            if (currentSlide === images.length - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide(currentSlide + 1);
            }
        }, interval);
        return () => clearInterval(loop);
    }, [images, currentSlide, interval, overlay]);

    let starReview = []

    function StarHelper() {
        for (let i = 0; i < stars[currentSlide]; i++) {
            starReview.push(<AiFillStar />);
        };
    }

    StarHelper();

    return (
        <section className="slideshow dblock">
            <Row xs={1} lg={3} className='justify-content-center'>
                <Col xs={10} lg={{ number: 8, order: 2 }} className="my-3 text-start d-flex align-items-center" id="reviewCol">
                    <Ratings
                        interval={interval[currentSlide]}
                        stars={starReview}
                        review={review[currentSlide]}
                        name={name[currentSlide]}
                    />
            </Col>
            <Col lg={4} xs={10} className='my-3 py-3' id="sliderCol">
                            <div style={currentSlideStyle} className="slide-thumbnail"></div>
            </Col>
        </Row>
        </section>
    );
}

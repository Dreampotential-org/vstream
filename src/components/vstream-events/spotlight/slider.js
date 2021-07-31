import React, { Fragment, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { CalendarContainer } from 'react-datepicker';
import BannerAd1 from '../../../assets/img/home/banner_ad1.png';
function AdsCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    style = {{ minHeight: "calc(100vh - 70px)" }}
                    src={BannerAd1}
                    alt="First slide"
                />
                {/* <Carousel.Caption >
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style = {{ minHeight: "calc(100vh - 70px)" }}
                    src={BannerAd1}
                    alt="Second slide"
                />

                {/* <Carousel.Caption style={{position:'relative', right:'0%', left:'0%'}}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style = {{ minHeight: "calc(100vh - 70px)" }}
                    src={BannerAd1}
                    alt="Third slide"
                />

                {/* <Carousel.Caption style={{position:'relative', right:'0%', left:'0%'}}>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}
export default AdsCarousel;
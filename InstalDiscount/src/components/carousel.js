import React, { useState } from "react"


import Carousel from 'react-bootstrap/Carousel'
import carusel1 from '../images/carusel1.jpg'
import carusel2 from '../images/carusel2.jpg'
import carusel3 from '../images/carusel3.jpg'
import carusel4 from '../images/carusel4.jpg'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect} style={{margin: 10}}>
            <Carousel.Item interval={2500}>
                <img className="d-block w-100" src={carusel1} alt="Imagine1"></img>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img className="d-block w-100" src={carusel2} alt="Imagine2"></img>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img className="d-block w-100" src={carusel3} alt="Imagine3"></img>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img className="d-block w-100" src={carusel4} alt="Imagine4"></img>
            </Carousel.Item>
        </Carousel>
    )
};

export default ControlledCarousel;

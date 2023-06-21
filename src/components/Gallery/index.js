import './style.css'
import React, { useState } from 'react';

const Gallery = ({ images }) => {

    const [current, setCurrent] = useState(0);
    const lenght = images.length;

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? lenght - 1 : current - 1)
    }


    if (images.length <= 0) {
        return null;
    }

    const display = images.length <= 1 ? 'none' : 'block';

    return (
        <div className='carrousel'>
            {images.map((l, index) => {
                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        <div className='carteImageCarrousel' style={{ backgroundImage: `url(${l})` }}>

                            <div className='partPrev'>
                                <span onClick={prevSlide} style={{ display: display }} className='prev'><i className="fa-sharp fa-solid fa-chevron-left"></i></span>
                            </div>
                            <div className='counterImage'>
                                <p className="counter">{current + 1} / {images.length}</p>
                            </div>
                            <div className='partNext'>
                                <span onClick={nextSlide} style={{ display: display }} className='next'><i className="fa-sharp fa-solid fa-chevron-right"></i></span>
                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Gallery;


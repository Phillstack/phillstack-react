import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide"

import './homepage.styles.scss';

const sliderConfiguration = {
    type: 'slider',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        800: {
            perView: 3
        },
        480: {
            perView: 3
        }
    }
};

const HomePage = () => {
    const glide = new Glide('.glide', sliderConfiguration);

    return (
        <div className='homeContainer'>
            <div id='banner'>
                <h1>PHILLSTACK</h1>
            </div>
            <div className="glide multi1">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">1</li>
                        <li className="glide__slide">2</li>
                        <li className="glide__slide">3</li>
                        <li className="glide__slide">4</li>
                    </ul>
                </div>
            </div>
            <div>
            <Link to="/contact" className="btn btn-primary">Connect</Link>
            </div>
        </div>
    );
};

export default HomePage;

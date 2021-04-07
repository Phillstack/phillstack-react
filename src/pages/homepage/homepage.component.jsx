import React from 'react';
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide"

import './homepage.styles.scss';

const sliderConfiguration = {
    type: 'carousel',
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
}

const HomePage = () => {
    // const glide = new Glide('.glide', sliderConfiguration).mount();

    return (
        <div className='homeContainer'>
            <div id='banner'>
                <h1>PHILLSTACK</h1>
            </div>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">1</li>
                        <li className="glide__slide">2</li>
                        <li className="glide__slide">3</li>
                        <li className="glide__slide">4</li>
                    </ul>
                </div>
            </div>
            <br></br>
            <div>
            <Link to="/contact" className="btn btn-primary">Connect</Link>
            </div>
        </div>
    );
};

export default HomePage;

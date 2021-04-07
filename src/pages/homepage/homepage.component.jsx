<<<<<<< HEAD
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-multi-carousel";
import { Image } from "semantic-ui-react";
import 'react-multi-carousel/lib/styles.css';

import './homepage.styles.scss';

export default function HomePage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
=======
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
>>>>>>> 68f3611250cc6d84c5d667fd02319b214a935b81
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            paritialVisibilityGutter: 50
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            paritialVisibilityGutter: 30
        }
<<<<<<< HEAD
    };

    const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
=======
    }
}

const HomePage = () => {
    // const glide = new Glide('.glide', sliderConfiguration).mount();
>>>>>>> 68f3611250cc6d84c5d667fd02319b214a935b81

    return (
        <div className='homeContainer'>
            <div id='banner'>
                <h1>PHILLSTACK</h1>
            </div>
<<<<<<< HEAD
            <Carousel
                ssr
                partialVisbile={false}
                infinite={true}
                itemClass="image-item"
                responsive={responsive}
                swipeable={true}
                draggable={true}
            >
                {images.slice(0, 5).map(image => {
                    return (
                        <Image
                            draggable={false}
                            style={{ width: "100%", height: "100%" }}
                            src={image}
                        />
                    );
                })}
            </Carousel>
=======
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
>>>>>>> 68f3611250cc6d84c5d667fd02319b214a935b81
        </div>
    );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));

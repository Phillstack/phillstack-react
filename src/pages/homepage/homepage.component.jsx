import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-multi-carousel";
import { Container, Image } from "semantic-ui-react";

import PhillstackBanner from '../../assets/psLogoBlack.png';
import BlkGoldImage from '../../assets/blkGoldResize.png';
import OptumImage from '../../assets/optum.png';
import BoomboxImage from '../../assets/boomboxCartel.png';

import 'react-multi-carousel/lib/styles.css';

import './homepage.styles.scss';

import { Row, Button } from 'react-bootstrap';

export default function HomePage() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            paritialVisibilityGutter: 60
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

    return (
        <div className='homeContainer'>
            <div id='banner'>
                <img src={PhillstackBanner} className='bannerLogo' alt='Phillstack Banner' />
            </div>
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
            <Container fluid className='projectsHomepage'>
                <Row className='hpProject1 projectDisplay'>
                    <img src={BlkGoldImage} className='ba b--black-10 shadow-5 home-img-fluid' alt='BlkGold Logo' />
                </Row>
                <Row className='hpProject2 projectDisplay'>
                    <img src={OptumImage} className='ba b--black-10 shadow-5 home-img-fluid' alt='Optum Logo' />
                </Row>
                <Row className='hpProject3 projectDisplay'>
                    <img src={BoomboxImage} className='ba b--black-10 shadow-5 home-img-fluid' alt='Boombox Cartel Logo' />
                </Row>
            </Container>
            <div id='connectBanner'>
                <Container className='contactSection'>
                    <Row className=' letsConnect'>
                        <h1>Let's Connect!</h1>
                    </Row>
                    <Row className='contactSocialLinks'>
                        <h3>Social Links</h3>
                    </Row>
                </Container>
                <Container>
                    <Row className='contactButton'>
                        <Button
                            href="/contact"
                        >
                            Contact
                            </Button>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));

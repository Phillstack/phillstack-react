import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Carousel from "react-multi-carousel";
// import { Container, Image } from "semantic-ui-react";

import psLogo from '../../assets/psLogo.png';
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

import bgSite from '../../assets/bgSite.jpeg';
import bmbxSite from '../../assets/bmbxSite.jpg';
// import PhillstackBanner from '../../assets/psLogoBlack.png';
// import BlkGoldImage from '../../assets/blkGoldResize.png';
// import OptumImage from '../../assets/optum.png';
// import BoomboxImage from '../../assets/boomboxCartel.png';

import './homepage.styles.scss';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {


    return (
        <div className='homeContainer'>
            <div className='headerSection'>
                <div className='PSLogo'>
                    <img src={psLogo} className='psLogo' alt='Phillstack Logo' />
                </div>
                <div className='socialLogos'>
                    <li>
                        <a
                            href='/'
                            rel="noopener noreferrer"
                            target="_blank" >
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            rel="noopener noreferrer"
                            target="_blank" >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a
                            href='/'
                            rel="noopener noreferrer"
                            target="_blank" >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                </div>
                <div className='psHeaderText'>
                    <h1 className='psHeaderMain'>Phillstack</h1>
                    <h2>innovation,</h2>
                    <h2>modernism</h2>
                    <h2>&amp; aesthetics</h2>
                </div>
                <div className='secondaryHeaderText'>
                    <h5>Elevate your brand with</h5>
                    <h5>Phillstack &mdash; everything</h5>
                    <h5>from strategy to scale</h5>
                    <h5>with our services of</h5>
                    <h5 className='headerServicesText'>UI &amp; Design, Front-End,</h5>
                    <h5 className='headerServicesText'>Back-End &amp; Consulting</h5>
                </div>
            </div>
            <div className='homeProjects'>
                <div className='homeProjectsHeader'>
                    <p className='line'></p>
                    <h3>Recent
                    Projects</h3>
                    <h6 className='projectDesc'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</h6>
                </div>
                <div className='projectType'>
                    <ul>
                        <li><button>All</button></li>
                        <p>&#47;</p>
                        <li><button>Front-End</button></li>
                        <p>&#47;</p>
                        <li><button>Back-End</button></li>
                        <p>&#47;</p>
                        <li><button>Consulting</button></li>
                        <p>&#47;</p>
                        <li><button>Web Design</button></li>
                    </ul>
                </div>
                <div className='project1'>
                    <img src={bgSite} alt='bgSite' className='bgSiteImage' />
                    <h3>Front-End, Back-End, Web Design</h3>
                    <h1>BlkGold Official Website</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='prjctBtn'>Show Project <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <div className='project2'>
                    <img src={bmbxSite} alt='bmbxSite' className='bmbxSiteImage' />
                    <h3>Front-End, Back-End, Web Design</h3>
                    <h1>Boombox Cartel Official Website</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className='scndPrjctBtn'>Show Project <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                <button className='showMoreBtn'>Show More</button>
            </div>
            <div className='contactSection'>
                
            </div>
        </div>
    );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));

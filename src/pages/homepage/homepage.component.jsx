import React from 'react';
import PhillstackBanner from '../../assets/psLogoBlack.png';
import './homepage.styles.scss';

class HomePage extends React.Component {
    render() {
        return (
            <div className='homeContainer'>
                <div id='banner'>
                    <img src={PhillstackBanner} className='bannerLogo' alt='Phillstack Banner' />
                </div>
            </div>
        );
    }
}

export default HomePage;
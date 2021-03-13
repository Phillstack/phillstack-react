import React from 'react';

import './footer.styles.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer' >
                <ul className='social-container'>
                    <p>&copy; 2021 by PhillStack Consulting, LLC.</p>
                </ul>
            </div>
        )
    };
}

export default Footer;
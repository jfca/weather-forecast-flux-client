import React from 'react';

const Footer = props => {
    return (
        <footer id="app-footer" className="app-footer bg-dark">
            <div id="footer-wrapper" className="container row row--ai-center row--jc-between text-small">
                {/*@TODO CSS code \0020 not working in ::after */}
                <p id="app-copyright" className="copyright my-1 mx-05">2020</p>
                <p className="my-1 mx-05">Data brought to you by <a href="https://openweathermap.org/">OpenWeather</a></p>
            </div>
        </footer>
    );
};

export default Footer;
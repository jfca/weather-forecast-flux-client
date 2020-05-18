import React from 'react';

const Footer = props => {
    return (
        <footer id="app-footer">
            <div id="footer-wrapper">
                {/*@TODO CSS code \0020 not working in ::after */}
                <p id="app-copyright" className="copyright">2020</p>
                <p>Data brought to you by <a href="https://openweathermap.org/">OpenWeather</a></p>
            </div>
        </footer>
    );
};

export default Footer;
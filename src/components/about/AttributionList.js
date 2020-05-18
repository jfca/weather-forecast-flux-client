import React from 'react';
import PropTypes from 'prop-types';

//@TODO attributions to be managed by admin dashboard and stored in context state
const AttributionList = props => {
    return (
        <div id="att-list-container">
            <h2 id="att-list-title">Attributions</h2>
            <ul id="att-list">
                <li className='att-list-item'>
                    <p>Street maps by <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a></p>
                </li>
                <li className='att-list-item'>
                    <p>
                        Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid,
                        IGN, IGP, UPR-EGP, and the GIS User Community
                    </p>
                </li>
                <li className='att-list-item'>
                    <p>Map data: &copy; <a
                        href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a
                        href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a
                        href="https://opentopomap.org">OpenTopoMap</a> (<a
                        href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)
                    </p>
                </li>
                <li className='att-list-item'>
                    <p>Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a></p>
                </li>
            </ul>
        </div>
    );
};

export default AttributionList;
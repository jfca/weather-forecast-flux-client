import React from 'react';

//@TODO attributions to be managed by admin dashboard and stored in context state
const AttributionList = () => {
    return (
        <section className="attribution-list bg-dark p-1 m-1">
            <h2>Attributions</h2>
            <ul>
                <li>
                    <p className="mx-2">Street maps by <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a></p>
                </li>
                <li>
                    <p className="mx-2">
                        Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid,
                        IGN, IGP, UPR-EGP, and the GIS User Community
                    </p>
                </li>
                <li>
                    <p className="mx-2">Map data: &copy; <a
                        href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a
                        href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a
                        href="https://opentopomap.org">OpenTopoMap</a> (<a
                        href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)
                    </p>
                </li>
                <li>
                    <p className="mx-2">Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a></p>
                </li>
            </ul>
        </section>
    );
};

export default AttributionList;
import React, {useContext, useEffect, useRef} from 'react';
import L from "leaflet";
import { OPENWEATHER_API_KEY } from '../../utils/constants';
import CurrentWeatherContext from "../../context/currentweather/currentweatherContext";
import MapsContext from "../../context/maps/mapsContext";
import LocationContext from "../../context/forecastlocation/locationContext";

// @TODO add weather condition legends to each condition type
// @TODO refactor tilelayers
// @TODO determine if context level state should be used to store map information for caching

const WeatherMap = () => {
    //@TODO merge city DB from weathermap and population
    //@TODO show cities based on currentLocation lat/lon
    const weathermapsContext = useContext(MapsContext);
    const { getCityMarkers } = weathermapsContext;
    const forecastlocationContext = useContext(LocationContext);
    const { currentLocation, defaultLocation, setCurrentLocation } = forecastlocationContext;

    // Build color-primary-base layers
    const baseLayersRef = useRef({});
    const defaultMapRef = useRef(null);
    useEffect(() => {
        defaultMapRef.current = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });

        const satelliteMap = L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            });

        const topographicalMap = L.tileLayer(
            'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                maxZoom: 17,
                attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            });

        baseLayersRef.current = {
            '<span class="legend">Default</span>': defaultMapRef.current,
            '<span class="legend">Satellite</span>': satelliteMap,
            '<span class="legend">Topographical</span>': topographicalMap,
        };
    }, []);

    // initialize map
    if (currentLocation === null) {
        setCurrentLocation(
            `${defaultLocation.cityName},${defaultLocation.countryCode}`
        );
    }
    const mapRef = useRef(null);
    useEffect(() => {
        // create map
        mapRef.current = L.map('map', {
            center: [
                currentLocation.lat,
                currentLocation.lon
            ],
            zoom: 13,
            layers: [defaultMapRef.current]
        });
        // eslint-disable-next-line
    },[]);

    // Build overlays layer
    const overLaysRef = useRef({});
    useEffect(() => {
        const cloudsMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'clouds'
        });

        const precipitationMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'precipitation'
        });

        const pressureMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'pressure'
        });

        const windspeedMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'wind'
        });

        const tempMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{temp}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'temp'
        });

        overLaysRef.current = {
            '<span class="legend">Clouds</span>': cloudsMap,
            '<span class="legend">Precipitation</span>': precipitationMap,
            '<span class="legend">Pressure</span>': pressureMap,
            '<span class="legend">Wind Speed</span>': windspeedMap,
            '<span class="legend">Temperature</span>': tempMap
        };
    });

     // Add control layer to map
    const controlRef = useRef(null);
    const markerLayerRef = useRef(null);
    useEffect(() => {
        controlRef.current = L.control.layers(baseLayersRef.current, overLaysRef.current)
            .addTo(mapRef.current);
        markerLayerRef.current = L.layerGroup().addTo(mapRef.current);
        // eslint-disable-next-line
    }, []);

    //
    useEffect(() => {
        console.log(currentLocation.countryCode);
        if (currentLocation !== null) {
            getCityMarkers(currentLocation.countryCode);
        }
        // eslint-disable-next-line
    }, []);

    // Update city marker layer
    useEffect(() => {
        if (weathermapsContext.cityMarkers !== null) {
            markerLayerRef.current.clearLayers();
            console.log('weathermapsContext.cityMarkers');
            console.log(weathermapsContext.cityMarkers);
            Object.values(weathermapsContext.cityMarkers).map(city => {
                const popupStr = `<span class="popup">${city.name.trimStart()}, ${city.country}</span>`;
                L.marker([city.lat, city.lon])
                    .bindPopup(popupStr)
                    .addTo(markerLayerRef.current);
            });
            controlRef.current.addOverlay(
                markerLayerRef.current, '<span class="legend">Cities</span>'
            );
        }
        // eslint-disable-next-line
    }, [weathermapsContext.cityMarkers]);

    // const onMapClick = (e) => {
    //     console.log(e);
    //     alert('You clicked at ' + e.latlng);
    // };

    return (
        <div id="weathermap-container">
            <div id="map"></div>
        </div>
    );
};

export default WeatherMap;
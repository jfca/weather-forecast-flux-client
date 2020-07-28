import React, {useContext, useEffect, useRef, useState} from 'react';
import L from "leaflet";
import { OPENWEATHER_API_KEY } from '../../utils/constants';
import CurrentWeatherContext from "../../context/currentweather/currentweatherContext";
import MapsContext from "../../context/maps/mapsContext";
import LocationContext from "../../context/location/locationContext";

// @TODO add weather condition legends to each condition type
// @TODO refactor tilelayers
// @TODO determine if context level state should be used to store map information for caching

const WeatherMap = () => {
    //@TODO merge city DB from weathermap and population
    //@TODO show cities based on currentLocation lat/lon
    // const weathermapsContext = useContext(MapsContext);
    // const { getCityMarkers } = weathermapsContext;
    const locationContext = useContext(LocationContext);
    const { currentLocation, defaultLocation, setCurrentLocation } = locationContext;

     const [mapCentre, setMapCentre] = useState([
                defaultLocation.location.coordinates[1], /* lat */
                defaultLocation.location.coordinates[0] /* lon */
            ]);

    // Build base layers
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
            '<span class="text-neutral text-dark">Default</span>': defaultMapRef.current,
            '<span class="text-neutral text-dark">Satellite</span>': satelliteMap,
            '<span class="text-neutral text-dark">Topographical</span>': topographicalMap,
        };
    }, []);

    // Build overlays layer
    const overLaysRef = useRef({});
    const precipitationMapRef = useRef(null);
    useEffect(() => {
        const cloudsMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'clouds'
        });

        precipitationMapRef.current = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
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

        const tempMap = L.tileLayer('http://{s}.tile.openweathermap.org/map/{layername}/{z}/{x}/{y}.png?appid={apiKey}', {
            maxZoom: 19,
            attribution: 'Map data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
            apiKey: OPENWEATHER_API_KEY,
            opacity: 0.9,
            layername: 'temp'
        });

        overLaysRef.current = {
            '<span class="text-neutral text-dark">Clouds</span>': cloudsMap,
            '<span class="text-neutral text-dark">Precipitation</span>': precipitationMapRef.current,
            '<span class="text-neutral text-dark">Pressure</span>': pressureMap,
            '<span class="text-neutral text-dark">Wind Speed</span>': windspeedMap,
            '<span class="text-neutral text-dark">Temperature</span>': tempMap
        };
    });

    // Set map centre and currentLocation
    useEffect(() => {
        console.log(currentLocation);
        console.log(defaultLocation);
        if (currentLocation === null) {
            setCurrentLocation([
                defaultLocation.location.coordinates[0], /* lon */
                defaultLocation.location.coordinates[1] /* lat */
            ])
        } else {
            setMapCentre([
                currentLocation.location.coordinates[1], /* lat */
                currentLocation.location.coordinates[0] /* lon */
            ]);
        }
    }, [currentLocation]);

    // Initialize map and set center and marker
    const mapRef = useRef(null);
    const defaultLayerRef = useRef(null);
    const markerLayerRef = useRef( null);
    const controlRef = useRef(null);
    useEffect(() => {
        defaultLayerRef.current = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 15,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            });
        // create map
        mapRef.current = L.map('map', {
            center: mapCentre,
            zoom: 10,
            maxZoom: 15,
            layers: [defaultMapRef.current, precipitationMapRef.current]
            });
        // const popupStr = `<span class="map-container__popup">${city.name.trimStart()}, ${city.country}</span>`;
        markerLayerRef.current = L.layerGroup().addTo(mapRef.current);
        L.marker([mapCentre[0], mapCentre[1]]).addTo(markerLayerRef.current);
        // Add control layer to map
        controlRef.current = L.control.layers(
            baseLayersRef.current,
            overLaysRef.current).addTo(mapRef.current);
        // eslint-disable-next-line
    },[]);

     // Update map center and marker
    useEffect(() => {
        mapRef.current.setView(mapCentre);
        markerLayerRef.current.clearLayers();
        L.marker([mapCentre[0], mapCentre[1]]).addTo(markerLayerRef.current);
        // eslint-disable-next-line
    }, [mapCentre]);

    // @TODO refactor css, split into separate classes from location
    return (
        <div className="map-container p-1 m-1 bg-dark">
            <div id="map" className="map-container__map"></div>
        </div>
    );
};

export default WeatherMap;
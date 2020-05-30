import React, {Fragment, useContext, useEffect, useRef, useState} from 'react';
import L from "leaflet";
import MapsContext from "../../context/maps/mapsContext";
import LocationContext from "../../context/location/locationContext";
import Spinner from "../layout/Spinner";

const LocationMap = () => {
    const mapsContext = useContext(MapsContext);
    const { cityMarkers, loading, getCityMarkers } = mapsContext;
    const locationContext = useContext(LocationContext);
    const { currentLocation, defaultLocation, setCurrentLocation } = locationContext;

    const [mapCentre, setMapCentre] = useState([
                defaultLocation.location.coordinates[1], /* lat */
                defaultLocation.location.coordinates[0] /* lon */
            ]);

    useEffect(() => {
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

    // Initialize map and set center
    const mapRef = useRef(null);
    const defaultLayerRef = useRef(null);
    useEffect(() => {
        mapRef.current = L.map('location-map')
            .setView(mapCentre, 10, { maxZoom: 15 });
        defaultLayerRef.current = L.tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 15,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(mapRef.current);
        // eslint-disable-next-line
    },[]);

     // Add marker layer to map
    const markerLayerRef = useRef(null);
    useEffect(() => {
        markerLayerRef.current = L.geoJSON().addTo(mapRef.current);
        // eslint-disable-next-line
    }, []);

    // Get map markers
    useEffect(() => {
        console.log(`useEffect setView ${mapCentre}`);
        mapRef.current.setView(mapCentre);
        getCityMarkers({
            lon: mapCentre[1],
            lat: mapCentre[0]
        });
        // eslint-disable-next-line
    }, [mapCentre]);

    // Update city marker layer
    const geoJSONRef = useRef(null);
    useEffect(() => {
        console.log(cityMarkers);
        if (cityMarkers !== null) {
            markerLayerRef.current.clearLayers();
            Object.values(cityMarkers).map(city => {
                L.geoJSON().addData(city.location)
                    .bindPopup(function(layer) {
                        return `<span class="map-container__popup">${city.name.trimStart()}, ${city.country}</span>`;
                    })
                    .addTo(markerLayerRef.current)
                    .on('click', onMarkerClick);
            });
        }
        // eslint-disable-next-line
    }, [cityMarkers]);

    const onMarkerClick = (e) => {
        console.log('onMarkerClick');
        console.log(e);
        setMapCentre([e.latlng.lat, e.latlng.lng]);
        setCurrentLocation({lon: e.latlng.lng, lat: e.latlng.lat});
    };

    return (
        <div className="map-container">
            <div id="location-map" className="map-container__map mb-1"></div>
        </div>
    );
};

export default LocationMap;
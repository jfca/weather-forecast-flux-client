import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CountrySelectOptions from "./CountrySelectOptions";
import CitySelectOptions from "./CitySelectOptions";
import M from 'materialize-css';

const LocationSelectModal = (
    {
        currentCountry,
        currentCity,
        countries,
        cities,
        handleCurrentCity,
        handleCurrentCountry
    }) => {
    const [selectedCountry, setSelectCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        if (currentCountry && currentCity) {
            setSelectCountry(currentCountry);
            setSelectedCity(currentCity);
        }
    }, [currentCountry, currentCity]);

    const onSelect = () => {
        if (selectedCountry === '' || selectedCity === '') {
            M.toast({html: 'Please select a country and city'});
        } else {
            handleCurrentCountry(selectedCountry);
            handleCurrentCity(selectedCity);

            // Clear values
            setSelectCountry('');
            setSelectedCity('');
        }
    };

    return (
        <div id="location-select-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <div className="row">
                    <div className="input-field">
                        <select
                            id="countries"
                            name="countries"
                            value={selectedCountry}
                            onChange={e => setSelectCountry(e.target.value)}
                        >
                            <option value="" id="default-select-country">
                                Select Country
                            </option>
                            <CountrySelectOptions countries={countries}/>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            id="cities"
                            name="cities"
                            value={selectedCity}
                            onChange={e => setSelectedCity(e.target.value)}
                        >
                            <option value="" id="default-select-city">
                                Select City
                            </option>
                            <CitySelectOptions cities={cities}/>
                        </select>
                    </div>
                </div>
                <div className="modal-footer">
                    <a
                        id="select-location-btn"
                        href="#!"
                        className="modal-close waves-effect waves-light blue btn"
                        onClick={onSelect}
                    >
                        Select City
                    </a>
                </div>
            </div>
        </div>
    );
};

LocationSelectModal.propTypes = {
    countries: PropTypes.object.isRequired,
    cities: PropTypes.object.isRequired,
    selectedCountry: PropTypes.string.isRequired,
    selectedCity: PropTypes.string,
    handleSelectedCity: PropTypes.func.isRequired,
    handleSelectedCountry: PropTypes.func.isRequired,

};

const modalStyle = {
    width: '40%',
    height: '40%'
};

export default LocationSelectModal;
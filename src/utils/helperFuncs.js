// import possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";

export const addZero = val => {
    if (val < 10) {
        val = "0" + val;
    }
    return val
};

// Parse the time value of a datetime string and return it
export const parseDate = datetime => {
    let result;
    try {
        if (typeof datetime !== 'string') {
            throw new Error('datetime value is not a string: ' + datetime);
        }
        const regex = /^(\d\d\d\d)-(\d\d)-(\d\d)\s(\d\d):(\d\d):(\d\d)$/;
        if (regex.test(datetime)) {
            result = datetime.split(' ')[0];
        } else {
            throw new Error('invalid format for datetime string: ' + datetime);
        }
    } catch (e) {
        console.log(e);
        result = '';
    } finally {
        return result;
    }
};

// Parse the date value of a datetime string and return it
export const parseTime = datetime_str => {
    let result;
    try {
        const regex = /^(\d\d\d\d)-(\d\d)-(\d\d)\s(\d\d):(\d\d):(\d\d)$/;
        if (regex.test(datetime_str)) {
            result = datetime_str.split(' ')[1];
        } else {
            throw new Error('invalid datetime string');
        }
    } catch (e) {
        // console.log(e);
        result = '';
    } finally {
        return result;
    }
};

// Remove illegal characters from a string so it can be used
// in an HTMLDOM selector
export const buildIdFromDateString = datetime_str => {
    let result;
    try {
        const regex = /^(\d\d\d\d)-(\d\d)-(\d\d)\s(\d\d):(\d\d):(\d\d)$/;
        if (regex.test(datetime_str)) {
            result = datetime_str.replace(/[-:\s+]/g, '');
        } else {
            throw new Error('invalid datetime string');
        }
    } catch (e) {
        // console.log(e);
        result = '';
    } finally {
        return result;
    }
};

// Checks if 'val' is an empty string, null, or undefined
// and returns 'NA' if true or original value if false
export const val_na = (val, na = 'N/A') => {
    const vals = ['', null, undefined];
    return (vals.includes(val) ? na : val );
};

export const getIconDescriptionFromCode = iconcode => {
    let searchResult = '';
    const icon_descriptions = {
        "01d": "clear sky",
        "01n": "clear sky",
        "02d": "few clouds",
        "02n": "few clouds",
        "03d": "scattered clouds",
        "03n": "scattered clouds",
        "04d": "broken clouds",
        "04n": "broken clouds",
        "09d": "shower rain",
        "09n": "shower rain",
        "10d": "rain",
        "10n": "rain",
        "11d": "thunderstorm",
        "11n": "thunderstorm",
        "13d": "snow",
        "13n": "snow",
        "50d": "mist",
        "50n": "mist"
    };

    try {
        searchResult = icon_descriptions[iconcode]
    } catch (err) {
        console.error(err);
        searchResult = '';
    }
    return searchResult;
};

// Get Font Awesome icons from OpenWeather icon code
export const getFontAwesomeIcon = (iconcode, multiplier = '') => {
    let result = '';
    const icon_map = {
        "01n": 'fas fa-circle', //"clear sky",
        "01d": 'fas fa-circle', //"clear sky",
        "02n": 'fas fa-cloud-sun', //"few clouds",
        "02d": 'fas fa-cloud-sun', //"few clouds",
        "03n": 'fas fa-cloud', //"scattered clouds",
        "03d": 'fas fa-cloud', //"scattered clouds",
        "04n": 'fas fa-cloud-meatball', //"broken clouds",
        "04d": 'fas fa-cloud-meatball', //"broken clouds",
        "09n": 'fas fa-cloud-showers-heavy', //"shower rain",
        "09d": 'fas fa-cloud-showers-heavy', //"shower rain",
        "10n": 'fas fa-cloud-rain', //"rain",
        "10d": 'fas fa-cloud-rain', //"rain",
        "11n": 'fas fa-bolt', //"thunderstorm",
        "11d": 'fas fa-bolt', //"thunderstorm",
        "13n": 'fas fa-snowflake', //"snow",
        "13d": 'fas fa-snowflake', //"snow",
        "50n": 'fas fa-smog', //"mist"
        "50d": 'fas fa-smog', //"mist"
    };

    const multiplier_map = {
        'xs': 'fa-xs',
        'sm': 'fa-sm',
        'lg': 'fa-lg',
        '2': 'fa-2x',
        '3': 'fa-3x',
        '4': 'fa-4x',
        '5': 'fa-5x',
        '6': 'fa-6x',
        '7': 'fa-7x',
        '8': 'fa-8x',
        '9': 'fa-9x',
        '10': 'fa-10x',
    }

    try {
        result = icon_map[iconcode]
        if (multiplier !== '' && Object.keys(multiplier_map).includes(multiplier)) {
            result = result + ' ' + multiplier_map[multiplier];
        }
    } catch (err) {
        console.error(err);
        result = '';
    }

    return result;
}

// Build a URL to return a weather icon. Multiplier is false for normal size
// and true for 2X size.
export const buildWeatherIconURL = (iconcode, multiplier = false) => {
    const base_url = 'http://openweathermap.org/img/wn/';
    const ext = (multiplier ? '@2x.png' : '.png');

    return base_url.concat(iconcode, ext)
};

const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

export const convertKelvinToCelsius = value => {
    let result;
    try {
        const kelvinValue = parseFloat(value);
        if (isNaN(kelvinValue)) throw new Error('Not a number');
        result = round(kelvinValue - 273.15, 1).toString() + "°C";
    } catch (e) {
        // console.log(e);
        result = '';
    } finally {
        return result;
    }
};

export const getWindDirection = degree => {
    const winddirection = [
        "N","NNE","NE","ENE","E","ESE",
        "SE","SSE","S","SSW","SW","WSW",
        "W","WNW","NW","NNW","N"
    ];
    let index;
    let result;
    try {
        const winddir = parseInt(degree);
        index = winddir % 360;
        index = Math.round(index / 22.5) + 1;
        result = winddirection[index];
    } catch (e) {
        console.log(e);
        result = '';
    } finally {
        return result;
    }
};

// Convert milliseconds to seconds
export const millToSec = (value) => {
    let result;
    try {
        const milliseconds = parseInt(value);
        if (isNaN(milliseconds)) throw new Error('Not a number');
        //@TODO remove modulus to return total seconds value
        // result = (milliseconds / 1000) % 60;
        result = milliseconds / 1000;
    } catch (e) {
        console.log('millToSec error: ' + e.msg);
        result = '';
    } finally {
        return result;
    }
};

// Convert milliseconds to minutes
export const millToMin = (value) => {
    let result;
    try {
        const milliseconds = parseInt(value);
        if (isNaN(milliseconds)) throw new Error('Not a number');
        //@TODO remove modulus to return total minutes value
        // result = (milliseconds / (1000*60)) % 60;
        result = milliseconds / (1000*60);
    } catch (e) {
        console.log('millToMin error: ' + e.msg);
        result = '';
    } finally {
        return result;
    }
};

// Convert milliseconds to hours
export const millToHour = (value) => {
    let result;
    try {
        const milliseconds = parseInt(value);
        if (isNaN(milliseconds)) throw new Error('Not a number');
        //@TODO remove modulus to return total hours value
        // result = (milliseconds / (1000*60*60)) % 24;
        result = milliseconds / (1000*60*60);
    } catch (e) {
        console.log('millToHour error: ' + e.msg);
        result = '';
    } finally {
        return result;
    }
};

export const secToMill = (value) => {
    let result;
    try {
        const seconds = parseInt(value);
        if (isNaN(seconds)) throw new Error('Not a number');
        result = seconds * 1000;
    } catch (e) {
        console.log('secToMill error: ' + e.msg);
        result = '';
    } finally {
        return result;
    }
};

export const storageAvailable = (type) => {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
};

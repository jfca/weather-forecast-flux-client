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
            throw 'datetime value is not a string: ' + datetime;
        }
        const regex = /^(\d\d\d\d)-(\d\d)-(\d\d)\s(\d\d):(\d\d):(\d\d)$/;
        if (regex.test(datetime)) {
            result = datetime.split(' ')[0];
        } else {
            throw 'invalid format for datetime string: ' + datetime;
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
            throw 'invalid datetime string';
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
            throw 'invalid datetime string';
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
export const val_na = val => {
    const vals = ['', null, undefined];
    return (vals.includes(val) ? 'NA' : val );
};

export const getIconDescription = iconcode => {
    let searchResult = '';
    const icon_descriptions = {
        "01d": "clear sky",
        "02d": "few clouds",
        "03d": "scattered clouds",
        "04d": "broken clouds",
        "09d": "shower rain",
        "10d": "rain",
        "11d": "thunderstorm",
        "13d": "snow",
        "50d": "mist"
    };

    try {
        searchResult = icon_descriptions[iconcode]
    } catch (err) {
        console.error(err);
        searchResult = '';
    }
    return searchResult;
};

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
        if (isNaN(kelvinValue)) throw 'Not a number';
        result = round(kelvinValue - 273.15, 1).toString() + "°C";
    } catch (e) {
        // console.log(e);
        result = '';
    } finally {
        return result;
    }
};

export const getWindDirection = degree => {
    // CompassDir = Sector(Round((WindDir MOD 360)/ 22.5,0)+1)
    const winddirection = [
        "N","NNE","NE","ENE","E","ESE",
        "SE","SSE","S","SSW","SW","WSW",
        "W","WNW","NW","NNW","N"
    ];
    let index;
    let result;
    try {
        const winddir = parseInt(degree)
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
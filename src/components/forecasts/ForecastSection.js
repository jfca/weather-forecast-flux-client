import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {parseDate, parseTime} from "../../utils/helperFuncs";
import ForecastHeadingRow from "./ForecastHeadingRow";
import ForecastDataRow from "./ForecastDataRow";

const ForecastSection = ({ forecasts }) => {

    // 1. sort list based on date
    const sorted_by_date = arr => {
        const mapped = arr.map((el, i) => {
            return { index: i, date: parseDate(el.date) }
        });

        mapped.sort((prev, next) => {
            if (prev.date > next.date) {
                return 1;
            }
            if (prev.date < next.date) {
                return -1;
            }
            return 0;
        });

        return mapped.map(el => {return arr[el.index]});
    };

    // 2. divide list into sub lists based on date
    const split_into_sub_arrays = arr => {
        let first = true;
        let prevDate = '';
        let currentDate = '';
        let chunked_arr = [];
        let temp_arr = [];
        for (let i=0; i<arr.length; i++) {
            currentDate = parseDate(arr[i].datetime);
            if (!first && prevDate !== currentDate) {
                chunked_arr.push(temp_arr);
                temp_arr = [];
            }
            temp_arr.push(arr[i]);
            first = false;
            prevDate = parseDate(arr[i].datetime);
        }
        chunked_arr.push(temp_arr);
        return chunked_arr;
    };

    // 3. sort each sub list based on hour
    const sorted_by_time = arr => {
        const mapped = arr.map((el, i) => {
            return { index: i, time: parseTime(el.date) }
        });

        mapped.sort((prev, next) => {
            if (prev.time > next.time) {
                return 1;
            }
            if (prev.time < next.time) {
                return -1;
            }
            return 0;
        });

        return mapped.map(el => {return arr[el.index]});
    };

    // Build a multi-dimensional array of daily forecasts sorted by time
    const buildForecastsList = forecasts => {
        const mapped = sorted_by_date(forecasts);
        // console.log('sorted_by_date:');
        // console.log(mapped);
        const chunked_array = split_into_sub_arrays(mapped);
        // console.log('split_into_sub_arrays:');
        // console.log(chunked_array);
        let sorted_forecasts = [];
        for (let i=0; i<chunked_array.length; i++) {
            sorted_forecasts.push(sorted_by_time(chunked_array[i]));
        }
        // console.log('sorted_forecasts:');
        // console.log(sorted_forecasts);
        return sorted_forecasts;
    };

    const all_forecasts = buildForecastsList(forecasts);
    return (
        <table id="forecast-section" className="responsive-table">
            <thead>
            <tr>
                <th className="center-align">Time</th>
                <th className="center-align">Conditions</th>
                <th className="center-align">Min. Temp.</th>
                <th className="center-align">Max. Temp.</th>
            </tr>
            </thead>
            <tbody>
            {all_forecasts.map((daily_forecasts, i) => {
                return (
                    <Fragment key={i}>
                        <ForecastHeadingRow daily_forecasts={daily_forecasts}/>
                        <ForecastDataRow forecasts={daily_forecasts}/>
                    </Fragment>
                )
            })}
            </tbody>
        </table>
    );
};

ForecastSection.propTypes = {
    forecasts: PropTypes.array.isRequired,
};

export default ForecastSection;

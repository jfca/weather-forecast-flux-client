import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {parseDate, parseTime} from "../../../utils/helperFuncs";
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
        let prevDate = '';
        let currentDate = '';
        let chunked_arr = [];
        let temp_arr = [];
        let first = true;
        for (let i=0; i<arr.length; i++) {
            currentDate = parseDate(arr[i].datetime);
            if (!first && prevDate !== currentDate) {
                chunked_arr.push(temp_arr);
                temp_arr = [];
            }
            temp_arr.push(arr[i]);
            prevDate = parseDate(arr[i].datetime);
            first = false;
        }
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
        const chunked_array = split_into_sub_arrays(mapped);
        let sorted_forecasts = [];
        for (let i=0; i<chunked_array.length; i++) {
            sorted_forecasts.push(sorted_by_time(chunked_array[i]));
        }
        return sorted_forecasts;
    };

    const all_forecasts = buildForecastsList(forecasts);
    return (
        <div id="fs">
            <ul>
                {
                    all_forecasts.map((daily_forecasts, i) => {
                        return (
                            <Fragment key={i}>
                                <ForecastHeadingRow daily_forecasts={daily_forecasts}/>
                                <ForecastDataRow forecasts={daily_forecasts}/>
                            </Fragment>
                        )
                    })
                }
            </ul>
        </div>
    );
};

ForecastSection.propTypes = {
    forecasts: PropTypes.array.isRequired,
};

export default ForecastSection;

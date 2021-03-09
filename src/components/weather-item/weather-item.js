import React, {useEffect, useState} from 'react';
import {AiFillStar as Star} from 'react-icons/ai';
import './weather-item.css';
import img from "../../images/img.png";
import OpenWeatherService from "../../services/openweather-service";
import StartImage from "../start-image";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

const WeatherItem = (props) => {

    const openWeatherService = new OpenWeatherService();

    const {searchCity, onItemSaved, onItemUnsaved} = props;

    const [weather, setWeather] = useState(null);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isSaved, setSaved] = useState(false);

    useEffect(() => {
        openWeatherService
            .getDataByCityName(searchCity)
            .then((weather) => {
                setWeather(weather);
                setLoading(false);
                setErr(false);
                setSaved(false);
            })
            .catch(() => {
                setErr(true);
                setLoading(true);
            });
    }, [searchCity]);


    function onStarClicked(){
        setSaved(!isSaved);
        console.log(weather);
        !isSaved ? onItemSaved(weather) : onItemUnsaved(weather.city);
    }

    const classNames = 'star ' + (isSaved ? 'checked' : 'unchecked');

    if (!weather) {
        return <StartImage/>
    }
    if (err) {
        return <ErrorIndicator/>
    }
    if (loading){
        return <Spinner/>
    }

    const {
        city,
        country,
        lon,
        lat,
        weatherMain,
        weatherDescription,
        icon,
        temp,
        minTemp,
        maxTemp,
        wind
    } = weather;

    return (
        <div className="weather-item">
            <div className="item-header">
                <span className="header-location">
                    <p className="location">{city}, {country}</p>
                    <p className="coordinates">({lon}, {lat})</p>
                </span>
                <Star className={classNames} onClick={()=>onStarClicked()}/>
            </div>
            <div className="item-body">
                <table>
                    <tbody>
                    <tr>
                        <th rowSpan="3">
                            <div className='icon-weather-container'>
                                <img src={icon} alt={icon}/>
                            </div>
                        </th>
                        <th className="weather-one-word">{weatherMain}</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Wind speed</th>
                    </tr>
                    <tr>
                        <td className="weather-details">{weatherDescription}</td>
                        <td className="temp-min">{minTemp} C</td>
                        <td className="temp-max">{maxTemp} C</td>
                        <td className="wind-speed">{wind} m/s</td>
                    </tr>
                    <tr>
                        <td className="temp-now">{temp} C</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WeatherItem;

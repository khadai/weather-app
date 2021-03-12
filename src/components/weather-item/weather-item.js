import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AiFillStar as Star} from 'react-icons/ai';
import './weather-item.css';
import img from "../../images/img.png";
import StartImage from "../start-image";

const WeatherItem = ({item, onItemSaved, onItemUnsaved}) => {

    const dispatch = useDispatch()

    const weatherItems = useSelector(state => state.weatherItems)

    const [isSaved, setSaved] = useState(false);

    useEffect(() => {
        if (item !== undefined && weatherItems.includes(item.city.toLowerCase())) {
            setSaved(true)
        } else
            setSaved(false)
    }, [weatherItems, item, isSaved])

    function onStarClicked() {
        setSaved(!isSaved);
        !isSaved ? onItemSaved(item.city.toLowerCase()) : onItemUnsaved(item.city.toLowerCase());
    }

    if (!item) return <StartImage/>

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
    } = item;

    return (
        <div className="weather-item">
            <div className="item-header">
                <span className="header-location">
                    <p className="location">{city}, {country}</p>
                    <p className="coordinates">({lon}, {lat})</p>
                </span>
                <Star className={`star ${isSaved ? 'checked' : 'unchecked'}`} onClick={() => onStarClicked()}/>
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

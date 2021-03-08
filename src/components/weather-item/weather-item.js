import React, {Component} from 'react';
import {AiFillStar as Star} from 'react-icons/ai';
import './weather-item.css';
import img from "../../images/img.png";
import OpenWeatherService from "../../services/openweather-service";
import StartImage from "../start-image";

export default class WeatherItem extends Component {

    openWeatherService = new OpenWeatherService();

    state = {
        weather: null
    };

    componentDidMount() {
        // const { cityName } = this.props;
        // if (!cityName){
        //     return;
        // }

        this.openWeatherService
            .getDataByCityName('lviv')
            .then((weather) => {
                this.setState({weather})
            });
    }

    render() {

        const {weather} = this.state;
        if (!weather) {
            return <StartImage/>
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
                    <Star className="star"/>
                </div>
                <div className="item-body">
                    <table>
                        <tbody>
                        <tr>
                            <th rowSpan="3">
                                <div className='icon-weather-container'>
                                    <img src={img} alt={icon}/>
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
                        </tr></tbody>
                    </table>
                </div>
            </div>
        );
    }
};


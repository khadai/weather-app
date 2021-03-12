import React, {useEffect, useState} from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";
import OpenWeatherService from "../../services/openweather-service";
import {useSelector} from "react-redux";

const SavedLocationsList = ({savedItems, onItemSaved, onItemUnsaved}) => {
    const weatherItems = useSelector(state => state.weatherItems)

    const openWeatherService = new OpenWeatherService();
    const [data, setData] = useState([]);

    useEffect(() => {
        weatherItems.forEach((item) => {
            openWeatherService.getDataByCityName(item).then((res) => {
                setData((prev) => [...prev, res])
            })
        })
    }, []);

    return (
        <div className="list-container">
            {
                data.map((item) =>
                    <WeatherItem
                        key={item.city}
                        item={item}
                        onItemSaved={(item) => onItemSaved(item)}
                        onItemUnsaved={(item) => onItemUnsaved(item)}
                    />)
            }
        </div>
    );
};

export default SavedLocationsList;
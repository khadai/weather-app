import React, {useEffect, useState} from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";
import OpenWeatherService from "../../services/openweather-service";

const SavedLocationsList = ({savedItems, onItemSaved, onItemUnsaved}) => {
    const openWeatherService = new OpenWeatherService();
    const [data, setData] = useState([]);
    const [isSaved, setIsSaved] = useState(true);
    console.log('in saved'+savedItems)

    useEffect(() => {
        savedItems.forEach((item) => {
            openWeatherService.getDataByCityName(item).then((res) => {
                setData((prev) => [...prev, res])
            })
        })
    },[]);

    return (
        <div className="list-container">
            {
                data.map((item) =>
                    <WeatherItem
                        key={item.city}
                        item={item}
                        onItemSaved={(item) => onItemSaved(item)}
                        onItemUnsaved={(item) => onItemUnsaved(item)}
                        isItemSaved={isSaved}
                    />)
            }
        </div>
    );
};

export default SavedLocationsList;
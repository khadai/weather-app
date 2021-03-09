import React from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";

const SavedLocationsList = (props) => {

    const {savedItems, onItemSaved, onItemUnsaved} = props;

    const elements = savedItems.map((item) => {
        return <WeatherItem searchCity={item.city}
                            onItemSaved={(item) => onItemSaved(item)}
                            onItemUnsaved={(item) => onItemUnsaved(item)}/>
    })


    return (
        <div className="list-container">
            {elements}
        </div>
    );
};

export default SavedLocationsList;
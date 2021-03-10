import React, {useEffect, useState} from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";

const SavedLocationsList = (props) => {

    const {savedItems, onItemSaved, onItemUnsaved} = props;
    const [isSaved, setSaved] = useState(true);

    const elements = savedItems.map((item) => {

        return <div key={item}><WeatherItem
            searchCity={item}
            onItemSaved={(item) => onItemSaved(item)}
            onItemUnsaved={(item) => onItemUnsaved(item)}
            isItemSaved={isSaved}/>
        </div>
    })

    return (
        <div className="list-container">
            {elements}
        </div>
    );
};

export default SavedLocationsList;
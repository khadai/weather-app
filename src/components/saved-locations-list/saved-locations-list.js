import React, {useEffect, useState} from 'react';

import './saved-locations-list.css';
import WeatherItem from "../weather-item";

const SavedLocationsList = (props) => {

    const {savedItems, onItemSaved, onItemUnsaved} = props;
    const [isSaved, setSaved] = useState(false);



    const elements = savedItems.map((item) => {
        // console.log('in saved: '+savedItems)

        return <div key={item}><WeatherItem
                            searchCity={item}
                            onItemSaved={(item) => onItemSaved(item)}
                            onItemUnsaved={(item) => onItemUnsaved(item)}
                            isSaved={isSaved}
        /></div>
    })

    return (
        <div className="list-container">
            {elements}
        </div>
    );
};

export default SavedLocationsList;
import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './app.css';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import WeatherItem from "../weather-item";
import SavedLocationsList from "../saved-locations-list";
import StartImage from "../start-image/start-image";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const App = () => {

    const [search, setSearch] = useState();
    const [savedItems, setItems] = useState([]);

    function onSearchChange(search) {
        setSearch(search)
    }

    function onItemSaved(item) {
        setItems([...savedItems, item])
        console.log('i saved the ' + item + '!')
    }

    function onItemUnsaved(city) {
        console.log('i unsaved the ' + city + '!')
        const idx = savedItems.findIndex((item) => item.city === city)

        const items = [
            ...savedItems.slice(0, idx),
            ...savedItems.slice(idx + 1)
        ]

        setItems(items);
    }

    console.log(savedItems)
    return (
        <div className="weather-app">
            <Router>
                <AppHeader/>

                <Route
                    path="/home" render={() => (
                    <React.Fragment>
                        <div className="search-content">
                            <SearchPanel onSearchChange={onSearchChange}/>
                        </div>
                        <WeatherItem
                            searchCity={search}
                            onItemSaved={(item) => onItemSaved(item)}
                            onItemUnsaved={(item) => onItemUnsaved(item)}
                        />
                    </React.Fragment>
                    )}/>
                <Route
                    path="/saved" render={()=>(
                    <SavedLocationsList
                        savedItems={savedItems}
                        onItemSaved={(item) => onItemSaved(item)}
                        onItemUnsaved={(item) => onItemUnsaved(item)}/>
                )}/>




            </Router>
        </div>
    );
};

export default App;
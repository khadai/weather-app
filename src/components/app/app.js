import React, {useState, useEffect} from 'react';
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
    const [isSaved, setSaved] = useState(false);

    useEffect(() => {
        if (savedItems.includes(search)) {
            setSaved(true)
            console.log("here")
        }
    }, [search])

    function onSearchChange(search) {
        setSearch(search)
    }

    function onItemSaved(item) {
        if (savedItems.includes(item))
            return;
        else
            setItems([...savedItems, item])
        console.log('i saved the ' + item + '!')
    }

    function onItemUnsaved(city) {
        console.log('i unsaved the ' + city + '!')
        const idx = savedItems.findIndex((item) => item === city)
        console.log(idx)
        if (idx > -1) {
            setItems([
                savedItems.splice(idx, 1),
            ]);
        }
    }

    console.log(savedItems)
    return (
        <div className="weather-app">
            <Router>
                <AppHeader/>
                <Route
                    path="/" exact render={() => (
                    <React.Fragment>
                        <div className="search-content">
                            <SearchPanel onSearchChange={onSearchChange}/>
                        </div>
                        <WeatherItem
                            searchCity={search}
                            onItemSaved={(item) => onItemSaved(item)}
                            onItemUnsaved={(item) => onItemUnsaved(item)}
                            isItemSaved={isSaved}
                        />
                    </React.Fragment>
                )}/>
                <Route
                    path="/saved" render={() => (
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
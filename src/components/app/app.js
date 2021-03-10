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
import OpenWeatherService from "../../services/openweather-service";

const App = () => {
    const openWeatherService = new OpenWeatherService();
    const [search, setSearch] = useState("");
    const [savedItems, setItems] = useState([]);
    const [isSaved, setSaved] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        openWeatherService.getDataByCityName(search).then((res) => {
            setData(res);
        }).catch((e) => {
            console.log(e)
        })
    },[search]);
    //
    // useEffect(() => {
    //     if (savedItems.includes(search)) {
    //         setSaved(true)
    //         console.log("here")
    //     } else{
    //         setSaved(false)
    //     }
    //     console.log("hereee")
    //     console.log('my saved item:'+savedItems)
    //     console.log('my search '+search)
    // }, [savedItems, search])

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
        const items = [...savedItems.slice(0, idx), ...savedItems.slice(idx + 1)]
        setItems(items);
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
                            item={data}
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
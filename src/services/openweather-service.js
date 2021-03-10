import axios from "axios";

export default class OpenWeatherService {
    _apiBase = 'http://api.openweathermap.org/data/2.5/weather';
    _API_key = 'e30da3fc6238aacffe634db34975304f';


    getResource = async (url) => {
        const res = await axios.get(`${this._apiBase}${url}&appid=${this._API_key}`)
            .then(res => res.data)
            .catch(err => console.log(err));
        console.log(res)
        return await res;
    }

    getCityData = async (cityRequest) => {
        if (Number.isInteger(cityRequest)){
            return this.getDataByCityZip(cityRequest)
        } else
            return this.getDataByCityName(cityRequest)
    }

    getDataByCityName = async (cityName) => {
        try {
            const cityData = await this.getResource(`?q=${cityName}`)
            return this._transformWeatherData(cityData);
        } catch(e) {
            throw Error(e);
        }
    }

    getDataByCityZip = async (zip) => {
        const cityData = await this.getResource(`?zip=${zip}`)
        return this._transformWeatherData(cityData);
    }

    getDataByCityId = async (id) => {
        const cityData = await this.getResource(`?id=${id}`)
        return this._transformWeatherData(cityData);
    }

    _transformWeatherData = (weatherData) => {
        return {
            id: weatherData.id,
            city: weatherData.name,
            country: weatherData.sys.country,
            lon: weatherData.coord.lon,
            lat: weatherData.coord.lat,
            weatherMain: weatherData.weather[0].main,
            weatherDescription: this._capitalizeFirstLetter(
                weatherData.weather[0].description),
            icon: this._toLink(weatherData.weather[0].icon),
            temp: this._kelvinToCelsium(weatherData.main.temp),
            minTemp: this._kelvinToCelsium(weatherData.main.temp_min),
            maxTemp: this._kelvinToCelsium(weatherData.main.temp_max),
            wind: weatherData.wind.speed
        };
    };

    _kelvinToCelsium(kelvin) {
        return Math.floor(kelvin - 273.15)
    }

    _capitalizeFirstLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    _toLink(iconName){
        return `http://openweathermap.org/img/wn/${iconName}@2x.png`
    }
}
// Weather Controller

import { WEATHERBIT_KEY } from '../keys/apikey';
import { Forecast } from '../state/appstate';
import { appState } from '../state/appstate';
import axios from 'axios';
import { imageMap } from '../utilities/loader';


export class WeatherController {
    divElement: HTMLDivElement;
    checkButton: HTMLButtonElement;

    constructor(){
        this.divElement = document.getElementById('weather')! as HTMLDivElement;
        this.checkButton = document.getElementById('geocheck') as HTMLButtonElement;

        this.addRenderHandler();
    }

    addRenderHandler() {
        this.checkButton.addEventListener('click', this.getForecastsCall.bind(this));
    }

    getForecastsCall(event: Event) {
        event.preventDefault();
        const userAddy = appState.coordinates;
        

        axios.get(`
            https://api.weatherbit.io/v2.0/forecast/daily?lat=${userAddy.lat}&lon=${userAddy.lng}&days=3&units=I&key=${WEATHERBIT_KEY.keyVal}
        `)
        .then((response) => {
            if (!response.data) {
                throw new Error('There was an error retrieving weather forecast')
            }
            // console.log(response.data.data);
            const responseArray = response.data.data;
            const forecastArray: Forecast[] = [];

            responseArray.forEach(forecastDay => {
                let singleForecast = new Forecast(
                    forecastDay.valid_date, 
                    forecastDay.high_temp, 
                    forecastDay.low_temp, 
                    forecastDay.weather.description,
                    forecastDay.weather.icon
                    );
                    forecastArray.push(singleForecast);
            });
            appState.addForecasts(forecastArray);

            this.renderForecasts();
        })
        .catch((error) => {
            alert(error.message);
            console.log('Error: ' + error);
        })
    }

    renderForecasts() {
        document.getElementById('icon1')!.setAttribute('src', imageMap[`./${appState.forecastArray[0].icon}.png`]);
        document.getElementById('icon2')!.setAttribute('src', imageMap[`./${appState.forecastArray[1].icon}.png`]);
        document.getElementById('icon3')!.setAttribute('src', imageMap[`./${appState.forecastArray[2].icon}.png`]);

        document.getElementById('desc1')!.innerHTML = appState.forecastArray[0].desc;
        document.getElementById('desc2')!.innerHTML = appState.forecastArray[1].desc;
        document.getElementById('desc3')!.innerHTML = appState.forecastArray[2].desc;

        document.getElementById('date1')!.innerHTML = 'Day: ' + appState.forecastArray[0].date.slice(5);
        document.getElementById('date2')!.innerHTML = 'Day: ' + appState.forecastArray[1].date.slice(5);
        document.getElementById('date3')!.innerHTML = 'Day: ' + appState.forecastArray[2].date.slice(5);

        document.getElementById('high1')!.innerHTML = 'High: ' + appState.forecastArray[0].high.toFixed(0).toString() + 'F';
        document.getElementById('high2')!.innerHTML = 'High: ' + appState.forecastArray[1].high.toFixed(0).toString() + 'F';
        document.getElementById('high3')!.innerHTML = 'High: ' + appState.forecastArray[2].high.toFixed(0).toString() + 'F';

        document.getElementById('low1')!.innerHTML = 'Low: ' + appState.forecastArray[0].low.toFixed(0).toString() + 'F';
        document.getElementById('low2')!.innerHTML = 'Low: ' + appState.forecastArray[1].low.toFixed(0).toString() + 'F';
        document.getElementById('low3')!.innerHTML = 'Low: ' + appState.forecastArray[2].low.toFixed(0).toString() + 'F';
        
    }

    
}
import axios from 'axios';
import {GOOGLE_API_KEY, WEATHERBIT_KEY} from './keys/apikey';

import { appState } from './state/appstate';


type GoogleGeocodeResponse = {
    results: { geometry: { location: {lat: number; lng: number} } }[];  // Custom safe-typing the response from Google
    status: 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST';
}


class MapComponent {
    formElement: HTMLFormElement;
    divElement: HTMLElement;
    searchInput: HTMLTextAreaElement;
    docHead: HTMLHeadElement;
    mapScript: HTMLScriptElement;

    constructor() {
        this.formElement = document.querySelector('form')!;
        this.divElement = document.getElementById('app')!;
        this.searchInput = document.getElementById('address')! as HTMLTextAreaElement;

        this.docHead = document.head;
        this.mapScript = document.createElement('script')! as HTMLScriptElement;
        this.mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY.keyVal}`;
        this.mapScript.async = true;
        this.docHead.appendChild(this.mapScript);


        this.addSubmitHandler();
    }

    addSubmitHandler() {
        this.formElement.addEventListener('submit', this.searchAddressHandler.bind(this));
    }

    
    searchAddressHandler(event: Event) {
        event.preventDefault();
        let userAddy = this.searchInput.value;
        
        axios.get<GoogleGeocodeResponse>(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
                userAddy
                )}&key=${GOOGLE_API_KEY.keyVal}`
            )
            .then((response) => {
                if (response.data.status !== 'OK') {
                    throw new Error('Could not fetch location!');
                }
                const coordinates = response.data.results[0].geometry.location;
                appState.addCoordinates(coordinates);
                // console.log(coordinates);
                const map = new google.maps.Map(document.getElementById('map')!, {
                    center: coordinates,
                    zoom: 10
                  });
                  new google.maps.Marker({position: coordinates, map: map});                          
            })
            .catch( (error) => {
                alert(error.message);
                console.log('Whooops!' + error);
            });
    }
}

class WeatherPanel {
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
        let userAddy = appState.coordinates;

        axios.get(`
            https://api.weatherbit.io/v2.0/forecast/daily?lat=${userAddy.lat}&lon=${userAddy.lng}&days=3&key=${WEATHERBIT_KEY.keyVal}
        `)
        .then((response) => {
            if (!response.data) {
                throw new Error('There was an error retrieving weather forecast')
            }
            console.log(response);
        })
        .catch((error) => {
            alert(error.message);
            console.log('Error: ' + error);
        })
    }

    renderCoords() {
        const coordData = appState.getCoordinates();
        const latSpan = document.createElement('h3');
        const lonSpan = document.createElement('h3');
        latSpan.innerText = coordData.lat.toString();
        lonSpan.innerText = coordData.lng.toString();
        this.divElement.appendChild(latSpan);
        this.divElement.appendChild(lonSpan);
    }

}

// const checkButton = document.getElementById('geocheck') as HTMLButtonElement;
// checkButton.addEventListener('click', () => {
//     console.log('Just Checking!')
// })


new MapComponent();
new WeatherPanel();
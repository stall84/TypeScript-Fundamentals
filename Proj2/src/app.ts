import axios from 'axios';
import {GOOGLE_API_KEY} from './keys/apikey';



class UserInput {
    formElement: HTMLFormElement;
    divElement: HTMLElement;
    searchInput: HTMLTextAreaElement;

    constructor() {
        this.formElement = document.querySelector('form')!;
        this.divElement = document.getElementById('app')!;
        this.searchInput = document.getElementById('address')! as HTMLTextAreaElement;


        this.addSubmitHandler();
    }

    addSubmitHandler() {
        this.formElement.addEventListener('submit', this.searchAddressHandler.bind(this));
    }

    searchAddressHandler(event: Event) {
        event.preventDefault();
        let userAddy = this.searchInput.value;
        let latDiv = document.createElement('h3');
        let lngDiv = document.createElement('h3');
        let coordDiv = document.createElement('div');
        
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(userAddy)}&key=${GOOGLE_API_KEY.keyVal}`)
            .then((response) => {
                // console.log(data);
                latDiv.innerText = response.data.results[0].geometry.location.lat;
                lngDiv.innerText = response.data.results[0].geometry.location.lng;
                coordDiv.appendChild(latDiv);
                coordDiv.appendChild(lngDiv);
                this.divElement.appendChild(coordDiv);
            })
            .catch((error) => {console.log('Whooops!' + error)});
        
    }


}


 new UserInput();
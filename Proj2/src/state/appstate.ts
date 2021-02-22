// Application-Wide State Management



type GoogleCoordObj = {
    lat: number,
    lng: number
}



export class Forecast {
    constructor(
        public date: string,
        public high: number,
        public low: number,
        public desc: string,
        public icon: string
    ){}
}

class GeoLocation {

    constructor(
        public lat: number,
        public lng: number,
        
    ) {}
}



class AppState  {

    private static instance: AppState;
    public coordinates: GeoLocation = {lat: 0, lng: 0} ;
    public forecastArray: Forecast[] = [];


    private constructor(
       
    ) {}

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AppState();
        return this.instance;
    }

    addCoordinates(coordObj: GoogleCoordObj ) {
         new GeoLocation(
            this.coordinates.lat = coordObj.lat,
            this.coordinates.lng = coordObj.lng
        )
    }
    
    addForecasts(forecastArr: Forecast[] ) {
            this.forecastArray = forecastArr;
        
    }

    getCoordinates() { 
        return this.coordinates;
    }

}

export const appState = AppState.getInstance();
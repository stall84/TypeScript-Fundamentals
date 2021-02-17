// Application-Wide State Management

// type WeatherbitResponse = {
//     data: { valid_date: string;
//             high_temp: number;
//             low_temp: number;
//             weather: {
//                 description: string;
//             } 
//         }[]
// }

type GoogleCoordObj = {
    lat: number,
    lng: number
}

// class Forecast {

//     constructor(
//         public date: WeatherbitResponse,
//         public high: WeatherbitResponse,
//         public low: WeatherbitResponse,
//         public desc: WeatherbitResponse
//     ){}
// }

class GeoLocation {

    constructor(
        public lat: number,
        public lng: number,
        
    ) {}
}



class AppState  {

    private static instance: AppState;
    public coordinates: GeoLocation = {lat: 0, lng: 0} ;

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

    getCoordinates() { 
        return this.coordinates;
    }
}

export const appState = AppState.getInstance();
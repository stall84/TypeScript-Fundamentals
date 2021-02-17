// Model for Forecast State

type WeatherbitResponse = {
    data: { valid_date: string;
            high_temp: number;
            low_temp: number;
            weather: {
                description: string;
            } 
        }[]
}

export class Forecast {

    constructor(
        public date: WeatherbitResponse,
        public high: WeatherbitResponse,
        public low: WeatherbitResponse,
        public desc: WeatherbitResponse
    ){}
}
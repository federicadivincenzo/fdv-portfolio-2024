const apiKey = import.meta.env.API_KEY

export default class EndpointHelper {
    static WeatherAPI(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`;
        return url;
    }
}
import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const key = import.meta.env.VITE_WEATHER_KEY;
console.log("KEY",key);
const weatherByCoordinates = (lat, lon) => {
  return axios.get(`${baseUrl}?lat=${lat}&lon=${lon}&appid=${key}`);
}
const weatherService = {
  weatherByCoordinates
}
export default weatherService;
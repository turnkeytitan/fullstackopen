import { useEffect, useState } from "react";
import weatherService from "../services/weather";
const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = () => {
    weatherService
      .weatherByCoordinates(...country.capitalInfo.latlng)
      .then((response) => {
        setWeather(response.data);
      }).catch(console.error);
  };
  return (
    <div>
      <h2>{country?.name.common && country?.name.common}</h2>
      <p>capital {country.capital && country?.capital[0]}</p>
      <p>area {country?.area && country?.area}</p>
      <p>languages:</p>
      <ul>
        {country?.languages &&
          Object.values(country?.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
      </ul>
      <img
        className="flag"
        src={country?.flags.svg && country?.flags.svg}
        alt={country?.flags.alt && country?.flags.alt}
      />
      {weather && (
        <div>
          <h3>Weather in {country.capital}</h3>
          <p>temperature {(weather.main.temp - 273.15).toFixed(2)} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="current weather"
          />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
export default CountryInfo;

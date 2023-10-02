import { useEffect, useState } from "react";
import countriesService from "./services/countries";
import CountryInfo from "./components/countryInfo";
import CountryList from "./components/countryList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    countriesService.getAll().then((response) => {
      setCountries(response.data);
    });
  };

  const searchTermHandler = (event) => {
    setSearchTerm(event.target.value);
    setFilteredCountries(
      countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  const showCountry = (name) => {
    setFilteredCountries(countries.filter((country) => country.name.common === name));
  };

  return (
    <>
      <section>
        <p>find countries</p>{" "}
        <input
          value={searchTerm}
          onChange={searchTermHandler}
        />
      </section>
      <article>
        {filteredCountries.length === 1 &&
          filteredCountries.map((country) => (
            <CountryInfo
              country={country}
              key={country.name.official}
            />
          ))}
        {filteredCountries.length > 10 && "Too many matches, specify another filter"}
        {filteredCountries.length < 10 && filteredCountries.length > 1 && (
          <CountryList
            names={filteredCountries.map((country) => country.name.common)}
            showCountry={showCountry}
          />
        )}
      </article>
    </>
  );
}

export default App;

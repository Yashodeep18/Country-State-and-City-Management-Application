import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const name = prompt("Enter country name:");
    if (name) {
      setCountries([...countries, { name, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const name = prompt("Edit country name:", countries[index].name);
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = name;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  const addState = (countryIndex) => {
    const name = prompt("Enter state name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name, cities: [] });
      setCountries(updatedCountries);
    }
  };

  const editState = (countryIndex, stateIndex) => {
    const name = prompt("Edit state name:", countries[countryIndex].states[stateIndex].name);
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].name = name;
      setCountries(updatedCountries);
    }
  };

  const deleteState = (countryIndex, stateIndex) => {
    if (window.confirm("Are you sure you want to delete this state?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.splice(stateIndex, 1);
      setCountries(updatedCountries);
    }
  };

  const addCity = (countryIndex, stateIndex) => {
    const name = prompt("Enter city name:");
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.push(name);
      setCountries(updatedCountries);
    }
  };

  const editCity = (countryIndex, stateIndex, cityIndex) => {
    const name = prompt("Edit city name:", countries[countryIndex].states[stateIndex].cities[cityIndex]);
    if (name) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities[cityIndex] = name;
      setCountries(updatedCountries);
    }
  };

  const deleteCity = (countryIndex, stateIndex, cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="app">
      <h1>Country, State, and City Management</h1>
      <button onClick={addCountry}>Add Country</button>
      <ul>
        {countries.map((country, countryIndex) => (
          <li key={countryIndex}>
            {country.name} <button onClick={() => editCountry(countryIndex)}>Edit</button>
            <button onClick={() => deleteCountry(countryIndex)}>Delete</button>
            <button onClick={() => addState(countryIndex)}>Add State</button>
            <ul>
              {country.states.map((state, stateIndex) => (
                <li key={stateIndex}>
                  {state.name} <button onClick={() => editState(countryIndex, stateIndex)}>Edit</button>
                  <button onClick={() => deleteState(countryIndex, stateIndex)}>Delete</button>
                  <button onClick={() => addCity(countryIndex, stateIndex)}>Add City</button>
                  <ul>
                    {state.cities.map((city, cityIndex) => (
                      <li key={cityIndex}>
                        {city} <button onClick={() => editCity(countryIndex, stateIndex, cityIndex)}>Edit</button>
                        <button onClick={() => deleteCity(countryIndex, stateIndex, cityIndex)}>Delete</button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

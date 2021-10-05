import React from 'react'

export default class Holiday extends React.Component {
  constructor() {
    super();
    this.state = {
      cities: [
        "Goa(India)",
        "Amsterdam(Netherlands)",
        "New York(USA)",
        "Darjeeling(India)",
        "Tokyo(Japan)",
        "Lonavala(India)",
      ],
      filteredCities: [],
    };
  }

  componentDidMount = () => {
    const cities = this.state.cities;
    const filteredCities = cities.filter((city) => city.includes("India"));

    const indianCities = [];
    filteredCities.forEach((filteredCity) => {
      let cityName = filteredCity.substring(0, filteredCity.indexOf("("));
      indianCities.push(cityName);
    });

    this.setState({ filteredCities: indianCities });
  };

  render() {
    return (
      <ol>
        {this.state.filteredCities.map((city, index) => {
          return <li key={"location" + (index + 1)}>{city}</li>;
        })}
      </ol>
    );
  }
}
import "./App.scss";
import { Component } from "react";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import CovidChart from "./Components/Chart/Chart";
import { fetchData } from "./api";
import covidLogo from "./assets/images/AdobeStock_331001452-01.svg";

class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <>
        <div className="container">
          <img className="container__logo" src={covidLogo} alt="COVID-19" />
          <Cards data={data} t />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <CovidChart data={data} country={country} />
        </div>
      </>
    );
  }
}

export default App;

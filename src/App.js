import "./App.scss";
import { Component } from "react";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import CovidChart from "./Components/Chart/Chart";
import { fetchData, fetchDailyData } from "./api";

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

    this.setState({ data: fetchedData, country: country });

    //set the state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className="container">
        <Cards data={data} t />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <CovidChart data={data} country={country} />
      </div>
    );
  }
}

export default App;

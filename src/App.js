import "./App.scss";
import { Component } from "react";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Chart from "./Components/Chart/Chart";
import { fetchData } from "./api";

class App extends Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }
  render() {
    return (
      <div className="container">
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;

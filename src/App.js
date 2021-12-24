import "./App.scss";
import { Component } from "react";
import Cards from "./Components/Cards/Cards";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import Chart from "./Components/Chart/Chart";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state
    return (
      <div className="container">
        <Cards data={data}t/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;

import './Chart.scss'

import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import {Line, Bar} from 'react-chartjs-2'

function Chart() {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setdailyData(await fetchDailyData());
    };

    fetchAPI()
  });

const lineChart = (
<Line data={{
  
  labels: "",
  datasets: [{}, {}]



}}/>


);



  return (
    <>
      <h1>Chart</h1>
    </>
  );
}

export default Chart;

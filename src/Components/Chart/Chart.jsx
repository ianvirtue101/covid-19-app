import "./Chart.scss";
import { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function CovidChart({ data: { confirmed, recovered, deaths }, country }) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Cases",
            borderColor: "rgba(0, 0, 220, 0.7)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(220, 0, 0, 0.7)",
            backgroundColor: "rgba(220, 0, 0, 0.7)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Cases", "Deaths"],
        datasets: [
          {
            label: "Cases",
            backgroundColor: ["rgba(0, 0, 220, 0.7)", "rgba(220, 0, 0, 0.7)"],
            data: [confirmed.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;
  return (
    <>
      <div className="container">{country ? barChart : lineChart}</div>
    </>
  );
}

export default CovidChart;

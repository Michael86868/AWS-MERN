import React,{useState,useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const WeatherChart = () => {
  //const {dallasTemperature1,dallasTemperature2,dallasTemperature3,dataCreated}
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
      AddStationData();
  }, [])

  const AddStationData = async () => {
      const data = await fetch("http://localhost:5000/api/station-data");
      const finalData = await data.json();
      const {document} = finalData;
      setTemperatureData(document);
  }


    const data = {
      labels: temperatureData.map(o => moment(new Date(o.dataCreated)).format('HH:mm:ss DD.MM.YYYY')),
      datasets: [
        {
          label: "dallasTemperature1",
          data: temperatureData.map(o => o.dallasTemperature1),
          fill: true,
          backgroundColor: "rgba(17,137,231,0.2)",
          borderColor: "rgba(17,137,231,1)"
        },
        {
          label: "dallasTemperature2",
          data: temperatureData.map(o => o.dallasTemperature2),
          fill: true,
          backgroundColor: "rgba(231,124,17,0.2)",
          borderColor: "rgba(231,124,17,1)"
        },
        {
          label: "dallasTemperature3",
          data: temperatureData.map(o => o.dallasTemperature3),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)"
        }
      ]
    };

    const options = {
      scales: {
        xAxes: [
          {
            ticks: {
              maxRotation: 65,
              minRotation: 65
            }
          }
        ]
      }
    };

    return (
      <>
        <Line data={data} options={options} />
      </>
    )
}

export default WeatherChart

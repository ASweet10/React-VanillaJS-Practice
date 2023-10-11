import { useState, useEffect } from 'react'
import SmallWeatherBox from "./Components/SmallWeatherBox"
import MainWeather from "./Components/MainWeather"
import CityInput from "./Components/CityInput"

function App() {
  const [city, setCity] = useState("Chicago")
  const [temperature, setTemperature] = useState(0)
  const [weatherConditions, setWeatherConditions] = useState("")
  const currentDate = new Date()

  function addDays(date, daysToAdd){
    var result = new Date(date)
    result.setDate(result.getDate() + daysToAdd)
    return result
  }

  function formatDate(date){
    return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear())
  }

  const getWeatherData = async (givenCity) => {
    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=6253113e99dace00d0804b0e88a32b3b&query=Chicago`
    ).then((res) => {
      res = res.json()
      console.log(res)
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getWeatherData()
  })

  const SmallWeatherBoxes = () => {
    /*
    const weatherBoxes = this.state.days.slice(1).map(day => {
      return(
        <li>
          <SmallWeatherBox {...day} />
        </li>
      )
    })
    return <ul className="weather-box-list">{weatherBoxes}</ul>
    */
  }

  return (
    <div className="app">
      <div className="app-header">
        {/*
        <MainWeather>
          {/* <CityInput city={this.state.city} makeApiCall={this.makeApiCall.bind(this)} /> */}
          {/* <SmallWeatherBoxes />
        </MainWeather>
        */}
      </div>
    </div>
  );
}

export default App;

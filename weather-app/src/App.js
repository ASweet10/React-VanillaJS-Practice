import axios from "axios"
import { useRef, useState } from 'react'
import sunIcon from './images/sun.png'

function App() {

  const inputRef = useRef(null)
  const [location, setLocation] = useState("")
  const [temperature, setTemperature] = useState(0)
  const [weatherConditions, setWeatherConditions] = useState("")
  const [tomorrow, setTomorrow] = useState("")
  const [tomorrowTemperature, setTomorrowTemperature] = useState("")
  const currentDate = new Date()

  const weatherstackkey = "60b7c3e15b9b09362af4d2d30b0a107e"
  const url = `http://api.weatherstack.com/current?access_key=${weatherstackkey}&query=${location}`

  function addDays(date, daysToAdd){
    var result = new Date(date)
    result.setDate(result.getDate() + daysToAdd)
    return result
  }

  function formatDate(date){
    return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear())
  }

  const handleRequest = () => {
     //Get current input value
    setLocation(inputRef.current.value)

    //setTomorrow(addDays(currentDate), 1)

    axios.get(url)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <div>
        <input 
          type="text" 
          placeholder="Please enter a city"
          ref={inputRef}
        />
        <button onClick={handleRequest}>Search</button>
      </div>
      <div className='container'>
        <div className='main-weather-img'>
          <image >Placeholder for image</image>
        </div>
        <div className='main-weather-info'>
          <h1>Current weather in {location}</h1>
          <h3>Temperature: {temperature} &deg;C </h3>
          <h3>Clear sky? {weatherConditions}</h3>
        </div>
      </div>
      <div className='container'>
        <div classname='weather-forecast-card'>
          <h2>{tomorrow}</h2>
          <img src={sunIcon} className='weather-card-img'/>
          <h3>{tomorrowTemperature} &deg;C </h3>
        </div>
      </div>
    </div>
  );
}

export default App;

import axios from "axios"
import { useRef, useState } from 'react'
import MainWeather from './Components/MainWeather'
import SmallWeather from './Components/SmallWeather'


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
  const urlTwo = 'https://jsonplaceholder.typicode.com/users/1'

  function addDays(date, daysToAdd){
    var result = new Date(date)
    result.setDate(result.getDate() + daysToAdd)
    return result
  }

  function formatDate(date){
    return ((date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear())
  }

  const getWeatherData = async (city, e) => {
    e.preventDefault()
     //Get current input value
    setLocation(inputRef.current.value)

    //setTomorrow(addDays(currentDate), 1)
    console.log(currentDate)
    axios.get(url)
    .then((response) => {
      console.log(response)
      //setTemperature(response.data.current.temperature)
    })
    .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <MainWeather />
    </div>
  );
}

export default App;

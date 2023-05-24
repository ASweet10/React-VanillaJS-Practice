import React from "react";
import '../App.css'
import sunIcon from './images/sun.png'
import cloudyIcon from './images/partlycloudy.png'
import realCloudyIcon from './images/madcloudyyo.png'

export default class SmallWeatherBox extends React.Component {
   getDayOfWeek = (date) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //Date.getDay() returns days of week 0-6 Sunday-Saturday
    dayOfWeek = new Date(date).getDay()
    return weekdays[dayOfWeek]
   }

   render(props) {
    return(
        <div className='main-weather-box'>
            <img className="main-weather-img" src={sunIcon} />
            <div className='main-weather-info'>
            <h1>Current weather in</h1>
            <h3>{location}</h3>
            <h3>Temperature: {temperature} &deg;C </h3>
            <h3>Clear sky? {weatherConditions}</h3>
            </div>
        </div>
    )
   }

}
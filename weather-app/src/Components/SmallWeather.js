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
        <div className='small-weather-box'>
            <h1>{this.getDay(this.props.date)}</h1>
            <img src={cloudyIcon} className='weather-card-img'/>
            <h3>0 &deg;C </h3>
        </div>
    )
   }

}
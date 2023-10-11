import React from "react"
import "../App.css"
import sunIcon from '../images/sun.png'
import cloudyIcon from '../images/partlycloudy.png'
import realCloudyIcon from '../images/terriblycloudy.png'

const SmallWeatherBox = (props) => {
   const getDayOfWeek = (date) => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return weekdays[new Date(date).getDay()] //Date.getDay() returns days of week 0-6 Sunday-Saturday
   }

    return(
        <div>
            <h1>{this.props.date ? this.getDayOfWeek(this.props.date) : ''}</h1> {/* If date passed as prop, set header value. Else blank */}
            <img src={this.props.icon ? require(`../images/${this.props.icon}.svg`) : require(`../images/pexels-clearsky.jpg`)} alt='sunImg' />
            <span className="temp">{Math.round(this.props.temp - 273.15)}&deg;C</span>
        </div>

    )
}

export default SmallWeatherBox
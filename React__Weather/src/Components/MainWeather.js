import React from 'react'

const MainWeather = (props) => {
  return (
    <div className={`flex flex-col w-full h-screen justify-center items-center bg-clearSkyBG bg-cover`}>
        <div className="mt-12 mb-4">
            <input type="text" placeholder="Please enter a city" className="rounded-lg p-2" />
        </div>
        <div className="flex w-1/2 flex-row justify-center items-center border-solid border-2 rounded-lg p-4">
            <div className="">
                <img className="w-1/2 object-cover" src="" alt="" />
            </div>

            <div className='text-white font-semibold'>
                <h1>Today</h1>
                <h1>Current weather in</h1>
                <h3>{this.props.city}</h3>
                <h3>Temperature: {this.props.data ? Math.round(this.props.data.temperature - 273.15) : 0} &deg;C </h3>
                <p>Clear sky? {this.props.data ? this.props.data.weather_desc.toLowerCase() : ''}</p>
            </div>
        </div>
        {this.props.children}
    </div>
  )
}

export default MainWeather
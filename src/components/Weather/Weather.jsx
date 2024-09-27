import Image from 'next/image'
import { useEffect, useState } from 'react'

function Weather() {
  const [weatherData, setWeatherData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const ipApiUrl = `https://api.ipdata.co?api-key=${process.env.NEXT_PUBLIC_IP_LOOKUP_API}`
    fetch(ipApiUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Invalid api call')
        return response.json()
      })
      .then((ipData) => {
        const { latitude, longitude } = ipData
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
        return fetch(weatherApiUrl)
      })
      .then((response) => {
        if (!response.ok) throw new Error('Invalid api call')
        return response.json()
      })
      .then((weatherData) => {
        setWeatherData(weatherData)
        setIsLoading(false)
        return weatherData
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
  }, [])

  const city = weatherData?.name
  const country = weatherData?.sys?.country
  const temp = weatherData?.main?.temp
  const tempC = Math.round(temp - 273.15)
  const weatherIdx = weatherData?.weather ? weatherData?.weather[0] : null
  const weatherDesc = weatherIdx?.description
  const weatherIcon = weatherIdx?.icon

  if (isLoading) return <WeatherSkeleton />
  if (!weatherData) return <p>No profile data</p>

  return (
    <WeatherWrapper
      city={city}
      country={country}
      tempC={tempC}
      weatherDesc={weatherDesc}
      weatherIcon={weatherIcon}
    />
  )
}

function WeatherSkeleton() {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-2/5 overflow-hidden">
      <div className="absolute -z-1 bg-purple dark:bg-black dark:border dark:border-solid dark:border-white opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0 rounded"></div>
      <div className="w-full z-50 flex justify-between">
        <div className="flex flex-col justify-center">
          <span className="bg-slate-100 rounded w-60 h-4 animate-pulse mb-1"></span>
          <span className="bg-slate-100 rounded w-52 h-4 animate-pulse mb-1"></span>
        </div>
        <div className="flex flex-col items-center">
          <div className='w-[6.25rem] h-[6.25rem] bg-slate-100 rounded-full animate-pulse mb-1'></div>
          <small className="bg-slate-100 rounded w-full h-4 animate-pulse"></small>
        </div>
      </div>
    </div>
  )
}

function WeatherWrapper({ city, country, tempC, weatherDesc, weatherIcon }) {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-2/5 overflow-hidden">
      <div className="absolute -z-1 bg-purple dark:bg-black dark:border dark:border-solid dark:border-white opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0 rounded"></div>
      {city && country && tempC && weatherDesc && weatherIcon && (
        <div className="w-full z-50 flex justify-between">
          <div className="flex flex-col justify-center">
            <p className="text-black dark:text-blue">
              Your location is{' '}
              <strong>
                {city} - {country}
              </strong>
              .
            </p>
            <p className="text-black dark:text-blue">
              It‘s <strong>{tempC} ºC</strong> over there!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              className="dark:brightness-200"
              src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              width={100}
              height={100}
              alt={weatherDesc}
            />
            <small className="text-slate-900 dark:text-blue">
              {weatherDesc}
            </small>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather

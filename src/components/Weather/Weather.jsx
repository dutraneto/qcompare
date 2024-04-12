import useApi from '../../hooks/useApi'
import Image from 'next/image'

function Weather(props) {
  const { city, country, tempC, weatherDesc, weatherIcon } = props
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

function WeatherWrapper({ city, country, tempC, weatherDesc, weatherIcon }) {
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-2/5 overflow-hidden rounded">
      <div className="absolute -z-1 bg-purple dark:bg-[#1E293B] opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0"></div>
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

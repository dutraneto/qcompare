import useApi from '../../hooks/useApi'
import Image from 'next/image'

const WeatherWrapper = ({ name, sys, main, weather: { ...weather } }) => {
  const country = sys?.country
  const temp = main?.temp
  const tempC = Math.round(temp - 273.15)
  const weatherIdx = weather[0]

  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-2/5 overflow-hidden rounded">
      <div className="absolute -z-1 bg-purple dark:bg-[#1E293B] opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0"></div>
      <div className="w-full z-50 flex justify-between">
        <div className="flex flex-col justify-center">
          <p className="text-black dark:text-blue">
            Your location is{' '}
            <strong>
              {name} - {country}
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
            src={`https://openweathermap.org/img/wn/${weatherIdx?.icon}@2x.png`}
            width={100}
            height={100}
            alt={weatherIdx?.description}
          />
          <small className="text-slate-900 dark:text-blue">
            {weatherIdx?.description}
          </small>
        </div>
      </div>
    </div>
  )
}

function Weather() {
  const ip = `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_LOOKUP_API}`
  const { loc, isLoading, isError } = useApi(ip)
  const lat = loc?.split(',')[0]
  const lon = loc?.split(',')[1]
  const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const weatherResponse = useApi(
    `${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
  )

  if (isLoading) return <>...Loading</>
  if (isError) return <>Error Fetching API</>
  return <WeatherWrapper {...weatherResponse} />
}

export default Weather

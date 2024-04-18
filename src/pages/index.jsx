import Layout from 'components/Layout/Layout'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { getData } from '../lib/getData'
import { localData } from './api/localData'

export default function Index(props) {
  // Dark mode
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Data props
  const { localData, weatherData } = props
  const city = weatherData?.name
  const country = weatherData?.sys?.country
  const temp = weatherData?.main?.temp
  const tempC = Math.round(temp - 273.15)
  const weatherIdx = weatherData?.weather[0]
  const weatherDesc = weatherIdx?.description
  const weatherIcon = weatherIdx?.icon
  const weatherProps = { city, country, tempC, weatherDesc, weatherIcon }

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <Layout
      {...localData}
      weatherProps={weatherProps}
      currentTheme={currentTheme}
      setTheme={setTheme}
    />
  )
}

export async function getStaticProps() {
  const weatherData =
    (await getData(
      'https://ipinfo.io/json?token=',
      process.env.NEXT_PUBLIC_IP_LOOKUP_API,
      'https://api.openweathermap.org/data/2.5/weather',
      process.env.NEXT_PUBLIC_WEATHER_API
    )) || {}

  return {
    props: {
      localData,
      weatherData
    }
  }
}

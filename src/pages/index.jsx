import Layout from 'components/Layout/Layout'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { getData } from '../lib/getData'

const localData = {
  siteName: 'Qcompare',
  logo: {
    src: '/images/icon-new.svg',
    alt: 'Qcompare Logo'
  },
  tooltip: {
    iconUrl: '/images/icon-new.svg',
    iconChristmas: '/images/icontip-christmas.svg',
    title: 'Qcompare',
    description:
      'Simply copy and paste your texts, then let the app do the rest with a single click.<br> Discover the nuances and variations between two texts effortlessly.'
  }
}

export default function Index(props) {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

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
  const weatherData = (await getData()) || {}

  return {
    props: {
      localData,
      weatherData
    }
  }
}

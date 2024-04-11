import Layout from 'components/Layout/Layout'
import * as React from 'react'
import { useTheme } from 'next-themes'

const localData = {
  siteName: 'Qcompare',
  logo: {
    eaurl: '/images/logo-eat2.png',
    qurl: '/images/logo-quarry.png',
    alt: 'Quarry Logo'
  },
  tooltip: {
    iconUrl: '/images/icon-new.svg',
    iconChristmas: '/images/icontip-christmas.svg',
    title: 'Qcompare',
    description:
      'Simply copy and paste your texts, then let the app do the rest with a single click.<br> Discover the nuances and variations between two texts effortlessly.'
  }
}

export default function Index() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <Layout {...localData} currentTheme={currentTheme} setTheme={setTheme} />
  )
}

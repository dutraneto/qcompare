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
    iconUrl: '/images/icontip.svg',
    iconChristmas: '/images/icontip-christmas.svg',
    title: 'Qcompare',
    description:
      'You just have to copy and paste your texts and click on the button. <br>Qcompare will find the difference between two texts.'
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

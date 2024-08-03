import Layout from 'components/Layout/Layout'
import * as React from 'react'
import { useTheme } from 'next-themes'
import { localData } from './api/localData'

export default function Index(props) {
  // Dark mode
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Data props
  const { localData } = props

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <Layout {...localData} currentTheme={currentTheme} setTheme={setTheme} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      localData
    }
  }
}

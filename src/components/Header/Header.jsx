import InputToggle from 'components/InputToggle/InputToggle'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

function Header(props) {
  const { eaurl, qurl, alt, currentTheme } = props
  const [url, setUrl] = React.useState(qurl)
  const isDarkMode = currentTheme === 'dark'
  const styles = {
    header:
      'bg-gray-50 p-6 flex items-end justify-between items-end dark:bg-[#0F172A]',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }
  React.useEffect(() => {
    !isDarkMode ? setUrl(eaurl) : setUrl(qurl)
  }, [eaurl, isDarkMode, qurl])

  return (
    <header className={styles.header}>
      <Link href={`/ `}>
        <a className="h-10">
          {url && (
            <Image
              src={url}
              width={isDarkMode ? 150 : 150}
              height={60}
              alt={alt}
              className={styles.fluid}
            />
          )}
        </a>
      </Link>
      <InputToggle
        currentTheme={props.currentTheme}
        setTheme={props.setTheme}
      />
    </header>
  )
}

export default Header

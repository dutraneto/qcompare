import InputToggle from 'components/InputToggle/InputToggle'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

function Header(props) {
<<<<<<< HEAD
  const { src, alt } = props
=======
  const { eaurl, alt, currentTheme } = props
  const isDarkMode = currentTheme === 'dark'
>>>>>>> master
  const styles = {
    header:
      'bg-gray-50 p-6 flex items-end justify-between items-center dark:bg-[#0F172A]',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }

  return (
    <header className={styles.header}>
<<<<<<< HEAD
      <Link href={`https://github.com/dutraneto`}>
        <a className="h-auto w-100" target="_blank">
          {src && (
            <Image
              src={src}
              width={80}
              height={80}
=======
      <Link href={`/ `}>
        <a className="h-auto w-100">
          {eaurl && (
            <Image
              src={eaurl}
              width={isDarkMode ? 140 : 140}
              height={54}
>>>>>>> master
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

import InputToggle from 'components/InputToggle/InputToggle'
import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

function Header(props) {
  const { src, alt } = props
  const styles = {
    header:
      'bg-gray-50 p-6 flex items-end justify-between items-center dark:bg-[#0F172A]',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }

  return (
    <header className={styles.header}>
      <Link href={`https://github.com/dutraneto`}>
        <a className="h-auto w-100" target="_blank">
          {src && (
            <Image
              src={src}
              width={80}
              height={80}
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

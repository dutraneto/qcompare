import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

const InputToggle = () => {
  // Use the useState hook to keep track of the current mode (light or dark)
  const [mode, setMode] = useState('light')

  return (
    <label className="relative inline-block m-0">
      {/* Use the "mode" state to set the input's checked property */}
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={mode === 'dark'}
        // When the input is changed, toggle the mode
        onChange={() => setMode(mode === 'light' ? 'dark' : 'light')}
      />
      <span
        // Use the "mode" state to set the span's class name
        className={`relative m-0 pt-2 inline-block w-9 h-9 cursor-pointer focus:outline-none focus:shadow-outline bg-${mode === 'light' ? 'gray' : 'green'
          }-700`}
      >
        {/* Show the sun icon for light mode and the moon icon for dark mode */}
        {mode === 'light' ? (
          <FaSun className="absolute inset-0 text-orange text-3xl" />
        ) : (
          <FaMoon className="absolute inset-0 text-purple text-3xl" />
        )}
        {/* Use a pseudo-element to create the sliding toggle effect */}
        <span className="absolute inset-0" />
      </span>
    </label>
  )
}

function Header(props) {
  const { url, alt } = props
  const styles = {
    header: 'bg-gray-50 p-6 flex items-end justify-between items-end ',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }
  return (
    <header className={styles.header}>
      <Link href={`/ `}>
        <a className="h-10">
          {url && (
            <Image
              src={url}
              width={150}
              height={40}
              alt={alt}
              className={styles.fluid}
            />
          )}
        </a>
      </Link>
      <InputToggle />
    </header>
  )
}

export default Header

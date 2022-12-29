import InputToggle from 'components/InputToggle/InputToggle'
import Link from 'next/link'
import Image from 'next/image'

function Header(props) {
  console.log('🚀 ~ file: Header.jsx:6 ~ Header ~ props', props)
  const { eaurl, qurl, alt, currentTheme } = props
  const styles = {
    header:
      'bg-gray-50 p-6 flex items-end justify-between items-end dark:bg-[#0F172A]',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }
  const isDarkMode = currentTheme === 'dark'
  const url = !isDarkMode ? eaurl : qurl
  return (
    <header className={styles.header}>
      <Link href={`/ `}>
        <a className="h-10">
          {url && (
            <Image
              src={url}
              width={isDarkMode ? 40 : 150}
              height={40}
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

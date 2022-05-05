import Link from 'next/link'
import Image from 'next/image'
function Header(props) {
  const { url, alt, siteName } = props
  const styles = {
    header: 'bg-gray-50 p-6 flex items-end',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }
  return (
    <header className={styles.header}>
      <Link href={`/`}>
        <a>
          {url && (
            <Image
              src={url}
              width={70}
              height={100}
              alt={alt}
              className={styles.fluid}
            />
          )}
        </a>
      </Link>
      <h1 className={styles.h1}>{siteName}</h1>
    </header>
  )
}

export default Header

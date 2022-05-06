import Link from 'next/link'
import Image from 'next/image'
function Header(props) {
  const { url, alt } = props
  const styles = {
    header: 'bg-gray-50 p-6 flex items-end',
    fluid: 'fluid',
    h1: 'text-lg font-bold ml-4'
  }
  return (
    <header className={styles.header}>
      <Link href={`/`}>
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
    </header>
  )
}

export default Header

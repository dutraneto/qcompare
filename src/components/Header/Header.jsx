import Link from 'next/link'
import Image from 'next/image'
function Header(props) {
  const { logo, siteName } = props
  return (
    <header className="bg-gray-200 p-6 flex items-end">
      <Link href={`/`}>
        <a>
          {logo.url && (
            <Image
              src={logo.url}
              width={69}
              height={95}
              alt={logo.alt}
              className="fluid"
            />
          )}
        </a>
      </Link>
      <h1 className="text-lg font-bold ml-4">{siteName}</h1>
    </header>
  )
}

export default Header

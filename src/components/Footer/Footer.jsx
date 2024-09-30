import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="flex w-full justify-center pb-6 dark:bg-black">
      <div className="flex items-end">
        <div className="text-center dark:text-white">
          © {year}, developed by{' '}
          <a
            className="underline text-blue"
            href="https://github.com/dutraneto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Check out my Github"
          >
            @dutraneto
          </a>
          .
        </div>
        <Image src="/images/avatar.png" loading="lazy" width={30} height={30} />
      </div>
    </footer>
  )
}

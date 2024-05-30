export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="d-flex w-full self-center pb-6 dark:bg-slate-900">
      <div>
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
        {/* <div className="text-center dark:text-white">
          Found an issue?{' '}
          <a
            className="underline text-blue"
            href="https://forms.gle/vpuJbXaPKyzCzoZy5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send us a feedback"
          >
            Describe it to us
          </a>
        </div> */}
      </div>
    </footer>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="d-flex w-full self-center pb-6 dark:bg-slate-900">
      <div>
        <div className="text-center dark:text-white">
          © {year}. Made with&nbsp;❤️&nbsp;&nbsp;by EA Team.
        </div>
        <div className="text-center dark:text-white">
          Found an issue?{' '}
          <a
            className="underline text-blue"
            href="https://forms.gle/vpuJbXaPKyzCzoZy5"
            target="_blank"
            rel="noopener noreferrer"
            title="Send us your feedback"
          >
            Describe it to us
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Footer() {
  return (
    <footer className="self-center mb-6 dark:bg-slate-900">
      <div>
        <div className="text-center dark:text-white">
          © 2022. Made with&nbsp;❤️&nbsp;&nbsp;by EA Team.
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

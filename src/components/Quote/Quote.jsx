import useApi from '../../hooks/useApi'
import Image from 'next/image'

const QuoteWrapper = ({ content, author }) => (
  <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-full sm:w-2/5 overflow-hidden">
    <div className="absolute -z-1 bg-purple dark:bg-[#1E293B] opacity-30 dark:opacity-100 w-100 height-100 left-0 right-0 bottom-0 top-0"></div>
    <div className="absolute z-1 -top-4 -left-2">
      <Image
        className="dark:brightness-200"
        src="/images/ri_double-quotes-l.svg"
        width={100}
        height={100}
      />
    </div>
    <div className="z-50">
      <cite className="text-black dark:text-white">{content}</cite>
      <p className="text-black dark:text-white font-bold">{author}</p>
    </div>
    <div className="absolute z-1 -bottom-4 -right-2 rotate-180">
      <Image src="/images/ri_double-quotes-l.svg" width={100} height={100} />
    </div>
  </div>
)
function Quote() {
  const url = 'https://official-joke-api.appspot.com/random_joke'
  const { setup, punchline, isLoading, isError } = useApi(url)
  if (isLoading)
    return <QuoteWrapper content={'Loading...'} author={'Loading...'} />
  if (isError)
    return (
      <QuoteWrapper
        content={'Error Fetching API'}
        author={'Error Fetching API'}
      />
    )
  return <QuoteWrapper content={setup} author={punchline} />
}

export default Quote

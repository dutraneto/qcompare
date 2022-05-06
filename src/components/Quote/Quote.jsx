import useFetcher from '../../hooks/useFetcher'
import Image from 'next/image'

function Quote() {
  const url = 'https://api.quotable.io/random'
  const { content, author, isLoading, isError } = useFetcher(url)
  // console.log(data)
  if (isLoading) return <p>loading ...</p>
  if (isError) return <p>Error fetching API</p>
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-2/5 overflow-hidden rounded">
      <div className="absolute -z-1 bg-purple opacity-30 w-100 height-100 left-0 right-0 bottom-0 top-0"></div>
      <div className="absolute z-1 -top-4 -left-2">
        <Image src="/images/ri_double-quotes-l.svg" width={100} height={100} />
      </div>
      <div>
        <cite className="font-bold">{content}</cite>
        <p>({author})</p>
      </div>
      <div className="absolute z-1 -bottom-4 -right-2 rotate-180">
        <Image src="/images/ri_double-quotes-l.svg" width={100} height={100} />
      </div>
    </div>
  )
}

export default Quote

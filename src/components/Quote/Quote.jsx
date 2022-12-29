import useApi from '../../hooks/useApi'
import Image from 'next/image'

function Quote() {
  const url = 'https://api.quotable.io/random'
  const { content, author, isLoading, isError } = useApi(url)
  // console.log(data)
  if (isLoading) return <p>loading ...</p>
  if (isError) return <p>Error fetching API</p>
  return (
    <div className="p-6 flex sm:items-end lg:items-center relative z-1 w-2/5 overflow-hidden rounded">
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
        <cite className="font-bold text-black dark:text-white">{content}</cite>
        <p className="text-black dark:text-white">({author})</p>
      </div>
      <div className="absolute z-1 -bottom-4 -right-2 rotate-180">
        <Image src="/images/ri_double-quotes-l.svg" width={100} height={100} />
      </div>
    </div>
  )
}

export default Quote

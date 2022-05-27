import useSWR from 'swr'
import fetcher from '../lib/fetcher'

const useApi = (url) => {
  const { data, error } = useSWR(url, fetcher)
  return {
    ...data,
    isLoading: !error && !data,
    isError: error
  }
}
export default useApi

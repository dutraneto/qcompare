//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//
import fetcher from './fetcher.js'

export async function getData(...args) {
  const ipApiURL = `${args[0]}${args[1]}`
  const ip = await fetcher(ipApiURL)
  console.log(ip)

  const [lat, lon] = ip.loc.split(',')
  const weatherEndpoint = `${args[2]}?lat=${lat}&lon=${lon}&appid=${args[3]}`
  const weather = await fetcher(weatherEndpoint)
  return weather
}

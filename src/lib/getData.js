//
// Getting Data
// @see https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
//

export async function getData() {
  const ipApiURL = `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_LOOKUP_API}`
  const ipResponse = await fetch(ipApiURL)
  const ip = await ipResponse.json()

  const [lat, lon] = ip.loc.split(',')

  const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather'
  const weatherEndpoint = `${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`
  const weatherApiRes = await fetch(weatherEndpoint)
  const weather = await weatherApiRes.json()
  return weather
}

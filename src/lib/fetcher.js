export default function fetcher(...args) {
  console.log(args)
  return fetch(...args).then((res) => res.json())
}

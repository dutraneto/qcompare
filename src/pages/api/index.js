import { localData } from './localData'

export default function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(localData))
}

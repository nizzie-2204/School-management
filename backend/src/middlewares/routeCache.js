const NodeCache = require('node-cache')
const cache = new NodeCache()

module.exports = (duration) => (req, res, next) => {
	// check request is GET
	if (req.method !== 'GET') {
		console.error('Cannot cache non-GET methods!')
		return next()
	}

	// check if key exists in cache
	const key = req.originalUrl
	const cachedRes = cache.get(key)

	// if key exists, send cache result
	if (cachedRes) {
		res.send(cachedRes)
	} else {
		// if not, replace .send with method to set res to cache
		res.originalSend = res.send
		res.send = (body) => {
			res.originalSend(body)
			cache.set(key, body, duration)
		}
		next()
	}
}

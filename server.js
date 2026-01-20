import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { sendGoldPrice } from './utils/sendGoldPrice.js'


const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    console.log('inside server.js')
    if (req.url === '/api') {
        console.log(`url: ${req.url}`)
        return await sendGoldPrice(res)
    } else if (!req.url.startsWith('/api')) {
        console.log(`url: ${req.url}`)
        return await serveStatic(req, res, __dirname)
    }

})

server.listen(PORT, () => console.log(`The server is running on PORT: ${PORT}`))

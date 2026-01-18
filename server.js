import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { sendGoldPrice } from './utils/sendGoldPrice.js'


const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    console.log('inside server.js')
    if (req.url === '/api') {
        return await sendGoldPrice(res)
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }

})

server.listen(PORT, () => console.log(`The server is running on PORT: ${PORT}`))

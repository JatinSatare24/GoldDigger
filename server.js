import { prototype } from 'node:events'
import http from 'node:http'


const PORT = 8000

const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {

    if (req.url === '/') {
        return await serveStatic(res, req, __dirname)
    }

})

server.listen(PORT, () => console.log(`The server is running on PORT: ${PORT}`))

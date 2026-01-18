import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(res, req, __dirname) {

    const publicDir = path.join(__dirname, 'public')

    const filePath = path.join(publicPath,
        req.url === '/' ? 'index.html' : req.url
    )

    const ext = path.extname(filePath)

    const contentType = getContentType(ext)

    const content = await fs.readFile(filePath)

    sendResponse(res, 200, contentType, content)

}
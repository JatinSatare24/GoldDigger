export function sendResponse(res, statusCode, contentType, payload) {
    console.log('inside sendresponse.js')
  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(payload)
  
}
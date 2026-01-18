import { sendResponse } from './sendResponse.js'

export async function sendGoldPrice(res) {
        console.log('inside sendGoldPrice.js')
    const goldPrice = (13000 + Math.random() * 100).toFixed(2);

    sendResponse(res, 200, "application/json", JSON.stringify({
        price: goldPrice
    }))
}
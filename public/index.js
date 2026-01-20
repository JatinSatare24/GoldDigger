const investBtn = document.getElementById('invest-btn')
const closeBtn = document.getElementById('close')
const priceDisplay = document.getElementById('price-display')
const investmentAmount = document.getElementById('investment-amount')
const investMentSummary = document.getElementById('investment-summary')
const dialog = document.getElementById('dialog')


let goldPrice = ''

async function fetchGoldPrice() {

    try {

        console.log(`Fetching gold price`)
        const res = await fetch("/api");
        console.log('response:', res)
        const data = await res.json();
        console.log('data in json:', data)
        goldPrice = data.price
        priceDisplay.textContent = goldPrice;
    } catch (err) {
        console.error("Error fetching price", err);
    }
}

// fetch immediately once
fetchGoldPrice();

// then update every 2 seconds
setInterval(fetchGoldPrice, 10000);

investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    if (!investmentAmount.value || !goldPrice) {
        investMentSummary.textContent = "Invalid investment or price unavailable.";
        dialog.showModal()
        return;
    }

    console.log(investmentAmount)
    console.log(goldPrice)

    investMentSummary.textContent =
        `You just bought ${(investmentAmount.value / goldPrice).toFixed(4)} grams for ₹${investmentAmount.value}. You will receive documentation shortly.`;

    dialog.showModal()

    investmentAmount.value = ''

})

closeBtn.addEventListener('click', () => {
    dialog.close()
})
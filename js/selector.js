const selector = document.getElementById('coin')
const basic = document.getElementById('basicPrice')
const professional = document.getElementById('professionalPrice')
const premium = document.getElementById('premiumPrice')
selector.addEventListener('change', () => {
    const selectedCoin = selector.value
    const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
    fetch(url)
        .then((response) => {
            if (response.ok){
                return response.json().then((data) => {
                    if (selectedCoin === 'eur'){
                        changePrice("€", data.usd.eur)
                    }
                    else if (selectedCoin === 'gbp'){
                        changePrice("£", data.usd.gbp)
                    }
                    else if (selectedCoin === 'usd'){
                        changePrice("$", data.usd.usd)
                    }
                })
            }
            else{
                throw new Error("Error on network response")
            }
        })
        .catch((error) => {
            console.log('Error: '+error)
        })
})
const changePrice = (symbol, conversion) => {
    basic.innerText = symbol + "0"
    professional.innerText = symbol + parseFloat((25*conversion).toFixed(2))
    premium.innerText = symbol + parseFloat((60*conversion).toFixed(2))
}
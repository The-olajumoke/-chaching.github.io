let firstCurrency = document.getElementById("currencyOne");
let secondCurrency = document.getElementById("currencyTwo");
let firstAmount = document.getElementById("amountOne");
let secondAmount = document.getElementById("amountTwo");
let convertButton = document.getElementById("findRates");

// console.log(firstCurrency)
function  calculateRates() {
  let firstCurrencyValue = firstCurrency.value;
  let secondCurrencyValue = secondCurrency.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrencyValue}`)
  .then((res) =>res.json())
  .then((data) => {
    const rateList =data.rates
      
      // LOOP
      for (const item in rateList) {
         const  options= `<option value="${item}">${item}</option>`
              console.log(options)
  firstCurrency.insertAdjacentHTML("afterbegin", options);
  secondCurrency.insertAdjacentHTML("afterbegin", options);
  
        // console.log(firstCurrency);
      // firstcurrency=firstCurrency.appendChild(options);
          }  
      console.log(firstCurrency)

    //GET RATES 
      const rate = data.rates[secondCurrencyValue];
      secondAmount.value = (rate * firstAmount.value).toFixed(2);
    });
  }
  
  
  // firstCurrency.appendChild(options)
  // console.log(firstCurrency)
// EVENT LISTENERS
currencyOne.addEventListener("change",  calculateRates);
amountOne.addEventListener("input",  calculateRates);
currencyTwo.addEventListener("change",  calculateRates);
amountTwo.addEventListener("input",  calculateRates);
convertButton.addEventListener("click",  () =>{
        calculateRates()
document.getElementById('audio').play()
});

 calculateRates();

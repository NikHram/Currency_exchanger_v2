let requestURL = 'https://api.exchangerate.host/latest?base=USD';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let response = request.response;
    const rates = response.rates;
    const main = document.querySelector("main");
    new currencyExchanger(main, rates);
}
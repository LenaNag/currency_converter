let amountElement = document.querySelector(".js-form__field-amount");
let currencyElement = document.querySelector(".js-form__field-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-form__result");
let usd = 4.00;
let eur = 4.53;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / eur;
            break;

        case "USD":
            result = amount / usd;
            break;
    }
    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});
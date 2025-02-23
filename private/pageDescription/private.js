// esse é o codigo de quantidade e soma do valor total.
let counter = 0;
let valueMaceio = 3000;
let valueChile = 5500;
let valueParis = 8500;
        
let btnAmount = document.getElementById("btn_amount").addEventListener("click", () => {
    counter++;
    document.getElementById("counter").textContent = counter;
});

document.getElementById("btn_amount").addEventListener("click", () => {
    let valueMaceioCounter = valueMaceio * counter
    document.getElementById("value_maceio").textContent = valueMaceioCounter
});

document.getElementById("btn_amount").addEventListener("click", () => {
    let valueChileCounter = valueChile * counter
    document.getElementById("value_chile").textContent = valueChileCounter
});

document.getElementById("btn_amount").addEventListener("click", () => {
    let valueParisCounter = valueParis * counter
    document.getElementById("value_paris").textContent = valueParisCounter
});


function round_number(num) {
    //first, move the decimal two places
    num = num * 100;

    //then, round the number to the nearest integer
    num = Math.round(num);

    //then move the decimal back two places
    num = num / 100;

    // handle trailing zeroes
    num = num.toFixed(2);

    return num;
}

// get all cal inputs 
const inputs = document.querySelectorAll("[name='qty']");
// evaluate all inputs 
inputs.forEach(function (input){
    //foro each individal input, listen for change
    input.addEventListener ("change", function (e){
const this_input = e.target;
const qty = parseFloat(e.target.value);
// for ansectors of the input 
const this_row = this_input.closest(".row");

// to call elements in a row, span is called from the html, closes the number 
const amazon = this_row.querySelector(".amazon");
const amazon_span = amazon.querySelector("span");
const amazon_price = parseFloat(amazon.dataset.price);
// cost of items 
const amazon_cost = qty * amazon_price; 
// puts the cost in the page for the user to see it, replaces span 
amazon_span.innerHTML = round_number(amazon_cost);
amazon.classList.add("active");

const homedepot = this_row.querySelector(".homedepot") ;
const homedepot_span = homedepot.querySelector("span");
const homedepot_price = parseFloat(homedepot.dataset.price);
const homedepot_cost = qty * homedepot_price; 
homedepot_span.innerHTML = round_number(homedepot_cost);
homedepot.classList.add("active");


const walmart  = this_row.querySelector(".walmart");
const walmart_span = walmart.querySelector("span");
const walmart_price = parseFloat(walmart.dataset.price);
const walmart_cost = qty * walmart_price; 
walmart_span.innerHTML = round_number(walmart_cost);
walmart.classList.add("active");

const micheals  = this_row.querySelector(".micheals");
const micheals_span = micheals.querySelector("span");
const micheals_price = parseFloat(micheals.dataset.price);
const micheals_cost = qty * micheals_price; 
micheals_span.innerHTML = round_number(micheals_cost);
micheals.classList.add("active");

let cheap = false;

if(micheals_cost < amazon_cost && micheals_cost < walmart_cost && micheals_cost < homedepot_cost) {
    cheap = micheals;
}

if(amazon_cost < micheals_cost && amazon_cost < walmart_cost && amazon_cost < homedepot_cost) {
    cheap = amazon;
}

if(homedepot_cost < amazon_cost && homedepot_cost < walmart_cost && homedepot_cost < micheals_cost ){
    cheap = homedepot;
}

if(walmart_cost < amazon_cost && walmart_cost < homedepot_cost && walmart_cost < micheals_cost ){
    cheap = walmart;
}

const current_cheap = this_row.querySelector(".cheap");

// to only highlight the item that is the cheapest 

if (current_cheap) {
    current_cheap.classList.remove("cheap");
}

if(cheap){
    cheap.classList.add("cheap");
}

    });
    });
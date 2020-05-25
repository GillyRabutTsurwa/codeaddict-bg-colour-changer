// Array of hard-coded colours
const colours = ["forestgreen", "orangered", "rgba(133,122,200)", "#F15025"];

// Our DOM elements. Using IIFE to get them, instead of declaring them as regular variables. Love this method.
const DOM_Elements = (function() {
    const elements = {
        body: document.querySelector("body"),
        btn: document.getElementById("btn"),
        colour: document.querySelector(".colour")
    }
    return elements;
})();

// Function that obtains a random index of the colours array
const getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length);
}

// Click listener to change body background
DOM_Elements.btn.addEventListener("click", () => {
    // get random number between 0 and 3    
    let randomNumber = getRandomNumber();
    DOM_Elements.body.style.backgroundColor = colours[randomNumber];
    DOM_Elements.colour.textContent = colours[randomNumber];
    console.log(colours[randomNumber])
});

console.log(DOM_Elements);
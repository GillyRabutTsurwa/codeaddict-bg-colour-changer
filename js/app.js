// Our DOM elements. Using IIFE to get them, instead of declaring them as regular variables. Love this method.
const DOM_Elements = (function () {
    const elements = {
        body: document.querySelector("body"),
        btn: document.getElementById("btn"),
        colour: document.querySelector(".colour")
    }
    return elements;
})();

const generateColour = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

// Function that obtains a random index of the colours array
const getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length);
}

// Click listener to change body background
DOM_Elements.btn.addEventListener("click", () => {
    let randomColour = generateColour();
    DOM_Elements.body.style.backgroundColor = randomColour;
    DOM_Elements.colour.textContent = randomColour;
});

console.log(DOM_Elements);
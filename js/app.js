const colours = ["forestgreen", "orangered", "rgba(133,122,200)", "#F15025"];

const DOM_Elements = (function() {
    const elements = {
        body: document.querySelector("body"),
        btn: document.getElementById("btn"),
        colour: document.querySelector(".colour")
    }
    return elements;
})();

const getRandomNumber = () => {
    return Math.floor(Math.random() * colours.length);
}

// set up click events
DOM_Elements.btn.addEventListener("click", () => {
    // get random number between 0 and 3    
    let randomNumber = getRandomNumber();
    DOM_Elements.body.style.backgroundColor = colours[randomNumber];
    DOM_Elements.colour.textContent = colours[randomNumber];
    console.log(colours[randomNumber])
});

console.log(DOM_Elements);
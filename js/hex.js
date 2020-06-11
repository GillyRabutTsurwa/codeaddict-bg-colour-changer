const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// hex = # and sixvaluesfrom0toF

const DOM_Elements = (function () {
    const elements = {
        body: document.querySelector("body"),
        btn: document.getElementById("btn"),
        colour: document.querySelector(".colour")
    }
    return elements;
})();


const generateHexCode = () => {
    let colourArr = [];
    for (let i = 0; i < 6; i++) {
        colourArr.push(hex[Math.floor(Math.random() * hex.length)]);
    }

    let colourCode = colourArr.join("")
    let newColour = `#${colourCode}`;
    console.log(newColour, typeof colourCode);
    return newColour;
}



DOM_Elements.btn.addEventListener("click", () => {
    DOM_Elements.body.style.backgroundColor = generateHexCode();
    DOM_Elements.colour.textContent = generateHexCode();
});
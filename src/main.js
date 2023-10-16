const title = document.getElementById("title");
const text = "Bananazep";

Array.from(text).forEach((letter, index) => {
    const letterElement = title.appendChild(document.createElement("span"));

    letterElement.id = `letter${index}`;
    letterElement.textContent = letter;

    const minWidth = 100,
        maxWidth = 300;
    addEventListener("mousemove", (event) => {
        let mouseX = event.clientX;

        let distance = calculateDistanceX(
            letterElement.getBoundingClientRect(),
            mouseX
        );

        letterElement.style["font-variation-settings"] = `"wdth" ${
            distance * 2
        }`;
    });
});

function calculateDistanceX(element, mouseX) {
    return Math.floor(mouseX - (element.x + element.width / 2));
}

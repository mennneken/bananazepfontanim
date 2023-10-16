const controlVariableWidth = document.getElementById("text-width-input");
const outputVariableWidthReturn = document.getElementById(
    "text-width-value-output"
);
const controlSize = document.getElementById("text-size-input");
const tryText = document.getElementsByClassName("test-text");

window.onload = () => {
    setValueOutput(controlVariableWidth, outputVariableWidthReturn);
    setSizeValueOfText(controlSize.value);
    setWidthValueOfText(controlVariableWidth.value);
};

controlVariableWidth.addEventListener("input", () => {
    setValueOutput(controlVariableWidth, outputVariableWidthReturn);
    setWidthValueOfText(controlVariableWidth.value);
});

controlSize.addEventListener("input", () => {
    setSizeValueOfText(controlSize.value);
});

function setValueOutput(elementSource, elementTarget) {
    elementTarget.innerHTML = elementSource.value;
}

function setSizeValueOfText(value) {
    Array.from(tryText).forEach((element) => {
        element.style.fontSize = `${value}em`;
    });
}
function setWidthValueOfText(value) {
    Array.from(tryText).forEach((element) => {
        element.style.fontVariationSettings = `"wdth" ${value}`;
    });
}

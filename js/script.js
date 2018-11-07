const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnReset = document.getElementById("reset");
const inputValue = document.getElementById("value");
const minValue = 0;
const maxValue = 1000;

const updateValue = how => {
    let value = Number(inputValue.value);
    if (how === "up") {
        if (value < maxValue) {
            ++value;
        }
    }
    else if (how === "down") {
        if (value > minValue) {
            --value;
        }
    }
    inputValue.value = value;
};

document.onkeydown = e => {
    e = e || window.event;

    if (e.keyCode == "38") {
        updateValue("up");
    }
    else if (e.keyCode == "40") {
        updateValue("down");
    }
};

btnDown.onclick = () => updateValue("down");
btnUp.onclick = () => updateValue("up");

btnReset.onclick = () => {
    inputValue.value = 0;
};
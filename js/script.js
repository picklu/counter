const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
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

btnUp.onclick = () => {
    updateValue("up");
};

btnDown.onclick = () => {
    updateValue("down");
};

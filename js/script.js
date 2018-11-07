const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const inputValue = document.getElementById("value");

const updateValue = how => {
    let value = Number(inputValue.value);
    if (how === "up") {
        if (value < 1000) {
            ++value;
        }
    }
    else if (how === "down") {
        if (value > 0) {
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

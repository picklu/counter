const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnReset = document.getElementById("reset");
const inputValue = document.getElementById("value");
const minValue = 0;
const maxValue = 1000;
const cardinalsObect = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety",
    "100": "one hundred",
    "200": "two hundred",
    "300": "three hundred",
    "400": "four hundred",
    "500": "five hundred",
    "600": "six hundred",
    "700": "seven hundred",
    "800": "eight hundred",
    "900": "nine hundred",
    "1000": "one thousand"
};
const cardinalsArr = Object.keys(cardinalsObect).reverse();

const spellTheNumber = number => {
    let spelledNumberArr = [];
    for (let i = 0; i < cardinalsArr.length; i++) {
        let eachNumber = cardinalsArr[i];
        let cardinalNumber = parseInt(eachNumber);
        let remainder = number % cardinalNumber;
        
        if (number == cardinalNumber) {
            spelledNumberArr.push(cardinalsObect[eachNumber]);
            break;
        }
        else if (number > cardinalNumber) {
            spelledNumberArr.push(cardinalsObect[eachNumber]);
            number = remainder;             
        }
    }
    return spelledNumberArr.join(" ").toUpperCase();
};

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
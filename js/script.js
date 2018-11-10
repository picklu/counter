const spelled = document.getElementById("spelled");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnReset = document.getElementById("reset");
const inputValue = document.getElementById("value");
const minValue = 1;
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
    "100": "hundred",
    "1000": "thousand"
};
const cardinalsArr = Object.keys(cardinalsObect).reverse();

const spellTheNumber = number => {
    let spelledNumberArr = [];
    for (let i = 0; i < cardinalsArr.length; i++) {
        let eachNumber = cardinalsArr[i];
        let cardinalNumber = parseInt(eachNumber);
        if (number >= cardinalNumber) {
            let quotient = parseInt(number / cardinalNumber);
            let remainder = number % cardinalNumber;
            if (cardinalNumber === 100 || cardinalNumber === 1000) {
                spelledNumberArr.push(cardinalsObect[quotient]);
            }
            spelledNumberArr.push(cardinalsObect[eachNumber]);
            
            if (!remainder) {
                break; 
            }
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
    spelled.innerText = spellTheNumber(value);
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
    inputValue.value = minValue;
    spelled.innerText = spellTheNumber(minValue);
};

// default value
spelled.innerText = spellTheNumber(minValue);


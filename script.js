const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function validateInput() {
    const value = inputNumber.value;

    if (value === '') {
        output.innerText = 'Please enter a valid number!'
    } else if (value <= 0) {
        output.innerText = 'Please enter a number greater than or equal to 1.'
    } else if (value >= 4000) {
        output.innerText = 'Please enter a number less than or equal to 3999.'
    } else {
        const romanNumeral = convertToRoman(value);
        output.innerHTML = `The Roman numeral for <b>${value}</b> is:<br><br><i>${romanNumeral}</i>`;
        inputNumber.value = '';
    }
};

function convertToRoman(num) {
    let romanNumeral = '';

    const romanList = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    for (let i = 0; i < romanList.length; i++) {
        while (num >= romanList[i][1]) {
            romanNumeral += romanList[i][0];
            num -= romanList[i][1];
        }
    }

    return romanNumeral;
};

convertBtn.addEventListener('click', validateInput)
inputNumber.addEventListener('keyup', (e) => {
    const number = e.target.value;
    const key = e.key;
    const isEnterKeyPressed = key === 'Enter';
    if (isEnterKeyPressed) {
        validateInput(number);
        inputNumber.value = '';
    };
  });
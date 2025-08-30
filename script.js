// =====================================
// Part 1: Variables & Conditionals
// =====================================
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageInput = document.getElementById("ageInput");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
    let age = parseInt(ageInput.value); // variable declaration
    if (isNaN(age)) {
        ageResult.textContent = "Please enter a valid number!";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
});

// =====================================
// Part 2: Functions
// =====================================
function sumNumbers(a, b) {
    return a + b;
}

function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript learning.`;
}

const sumBtn = document.getElementById("sumBtn");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumResult = document.getElementById("sumResult");

sumBtn.addEventListener("click", () => {
    let total = sumNumbers(Number(num1.value), Number(num2.value));
    sumResult.textContent = `The sum is: ${total}`;
});

// =====================================
// Part 3: Loops
// =====================================
const loopBtn = document.getElementById("loopBtn");
const numberList = document.getElementById("numberList");

loopBtn.addEventListener("click", () => {
    numberList.innerHTML = ""; // clear list
    for (let i = 1; i <= 10; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        numberList.appendChild(li);
    }
});

// =====================================
// Part 4: DOM Manipulation
// =====================================
const changeColorBtn = document.getElementById("changeColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

changeColorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = 
        `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
});

addItemBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "New list item!";
    dynamicList.appendChild(li);
});

nameInput.addEventListener("input", () => {
    greeting.textContent = greetUser(nameInput.value);
});

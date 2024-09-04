"use strict";

let cardName = document.querySelector("#cardName");
let cardNumber = document.querySelector("#cardNumber");
let firstContent = document.querySelector(".FirstContent span");
const firstContentFlex = document.querySelector(".firstContentFlex span");
let secondContentFlex = document.querySelector(".secondContentFlex span");
let secondContentFlexP = document.querySelector(".secondContentFlex p");
let thirdContent = document.querySelector(".ThirdContent");

const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const message = document.querySelector(".message");
const messages = document.querySelector(".messages");
const confirm = document.querySelector(".confirm");
const mess = document.querySelector(".mess");
function CardDetails() {
  const nameInput = cardName.value.trim();
  message.textContent = "";
  if (nameInput === "") {
    message.textContent = "⛔You Input Nothing";
    message.style.color = "red";
    return;
  } else if (nameInput.charAt(0) !== nameInput.charAt(0).toUpperCase()) {
    message.textContent = "⛔Start with UpperCase";
    message.style.color = "red";
    return;
  } else {
    firstContentFlex.textContent = nameInput;
  }
}

function CardNumbers() {
  const cardNumberValue = cardNumber.value.trim();
  messages.textContent = "";

  firstContent.textContent = cardNumberValue;

  console.log(cardNumberValue);
  if (cardNumberValue === "") {
    messages.textContent = "⛔You Input Nothing";
    messages.style.color = "red";
    return;
  } else if (isNaN(Number(cardNumberValue))) {
    messages.textContent = "⛔Wrong Format,numbers Only";
    messages.style.color = "red";
    return;
  } else if (cardNumberValue.length !== 16) {
    messages.textContent = "⛔Check Numbers";
    messages.style.color = "red";
    return;
  } else {
    message.textContent = "";
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function getDate(arr) {
  const monthValue = month.value.trim();

  //   secondContentFlex.textContent = monthValue;

  if (monthValue === "") {
    mess.textContent = "⛔You Input Nothing";
    mess.style.color = "red";
    return;
  } else if (isNaN(Number(monthValue))) {
    mess.textContent = "⛔Wrong Format,numbers Only";
    mess.style.color = "red";
    return;
  }

  const monthNumber = Number(monthValue);
  if (arr.includes(monthNumber)) {
    secondContentFlex.textContent = monthValue;
    mess.textContent = "";
    return;
  } else {
    mess.textContent = "⛔Check Numbers";
    mess.style.color = "red";
    return;
  }
}

// confirm.addEventListener("click", (e) => {
//   e.preventDefault();
// });

document.addEventListener("DOMContentLoaded", function () {
  cardNumber.addEventListener("input", CardNumbers),
    cardName.addEventListener("input", CardDetails);
  month.addEventListener("input", () => {
    getDate(array);
  });
});

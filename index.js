"use strict";

let cardName = document.querySelector("#cardName");
let cardNumber = document.querySelector("#cardNumber");
let firstContent = document.querySelector(".FirstContent span");
const firstContentFlex = document.querySelector(".firstContentFlex span");
let secondContentFlex = document.querySelector(".para p");
let emergencyP = document.querySelector(".emergency");
let thirdContent = document.querySelector(".ThirdContent");

const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const message = document.querySelector(".message");
const messages = document.querySelector(".messages");
const confirm = document.querySelector(".confirm");
const mess = document.querySelector(".mess");
const messa = document.querySelector(".messa");
const messag = document.querySelector(".messag");
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

function getYear() {
  const yearValue = year.value;

  emergencyP.textContent = yearValue;
  messa.textContent = "";

  if (yearValue === "") {
    messa.textContent = "⛔You Input Nothing";
    messa.style.color = "red";
  } else if (isNaN(Number(yearValue))) {
    messa.textContent = "⛔Wrong Format,numbers Only";
    messa.style.color = "red";
    return;
  } else if (!yearValue.charAt(0).startsWith("2")) {
    messa.textContent = "⛔Wrong Format,numbers Only";
    messa.style.color = "red";
    return;
  } else if (yearValue.length !== 2) {
    messa.textContent = "⛔Check Numbers";
    messa.style.color = "red";
    return;
  } else {
    messa.textContent = "";
  }
}

function getCVC() {
  const cv = cvc.value;

  thirdContent.textContent = cv;
  messag.textContent = "";

  if (cv === "") {
    messag.textContent = "⛔You Input Nothing";
    messag.style.color = "red";
  } else if (isNaN(Number(cv))) {
    messag.textContent = "⛔Wrong Format,numbers Only";
    messag.style.color = "red";
  } else if (cv.length !== 3) {
    messag.textContent = "⛔Check Numbers";
    messag.style.color = "red";
    return;
  } else {
    messag.textContent = "";
  }
}
// confirm.addEventListener("click", (e) => {
//   e.preventDefault();
// });

document.addEventListener("DOMContentLoaded", function () {
  cardNumber.addEventListener("input", CardNumbers),
    cardName.addEventListener("input", CardDetails),
    month.addEventListener("input", () => {
      getDate(array);
    });

  year.addEventListener("input", getYear);
  cvc.addEventListener("input", getCVC);
});

//DATA
const data = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Israel?",
    answer: "Jeruslam",
    options: ["Tel Aviv", "Jerusalem", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Okaido", "Kyoto", "Tokyo", "Nagasaki"],
  },
];

let button = document.querySelector("button");
let quiz = document.querySelector(".quiz");
let timer = document.querySelector(".timer");
let option = document.querySelectorAll(".option");
let fun = document.querySelectorAll(".fun");
let bunch = document.querySelector(".bunch");
let questions = document.querySelector(".question");

let count = 5;
let questionNumber = 0;

quiz.style.display = "none";

button.addEventListener("click", initialize);
let countdown;

function initialize() {
  button.style.display = "none";
  quiz.style.display = "block";
  displayQuestion();
  Options();
  tikTik();
  countdown = setInterval(quizStart, 1000);
}

function quizStart() {
  if (count <= 0) {
    if (questionNumber >= data.length) {
      clearInterval(countdown);
    } else {
      count = 5;
      questionNumber++;
      resetColor();
      displayQuestion();
      Options();
      tikTik();
    }
  } else {
    timer.innerText = count--;
  }
}

function displayQuestion() {
  questions.innerText = data[questionNumber].question;
}

function Options() {
  for (let i = 0; i < data.length; i++) {
    option[i].innerText = data[questionNumber].options[i];

    // console.log(option[i]);
  }
  selectOption();
}

function tikTik() {
  timer.innerText = count--;
  // if (count <= 0) {
  // count = 5;
  // questionNumber++;
  // resetColor();
  // console.log(5, count);
  // } else {
  // }
}

function resetColor() {
  for (let i = 0; i < data.length; i++) {
    option[i].style.color = "blue";
    bunch.style.pointerEvents = "all";
  }
}

function selectOption() {
  for (let i = 0; i < data.length; i++) {
    option[i].addEventListener("click", lockOption);
  }
}

function lockOption(e) {
  e.target.style.color = "red";

  if (e.target.style.color == "red") {
    bunch.style.pointerEvents = "none";
  }

  // console.log(e.target);
  // option[i].classList.add("disable");
}

// function disableOpt() {
// for (let i = 0; i < data.length; i++) {
// option[i].classList.add("disable");
// }
// }

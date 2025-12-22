const questions = [
  {
    question: "推し○○の特徴は？",
    choices: ["A", "B", "C", "D"],
    answer: 1
  },
  // 5問以上作ること
];

let current = 0;
let score = 0;

const qText = document.querySelector("#question");
const choicesDiv = document.querySelector("#choices");
const result = document.querySelector("#result");

function showQuestion() {
  qText.textContent = questions[current].question;
  choicesDiv.innerHTML = "";

  questions[current].choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(index));
    choicesDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    result.textContent = "正解！";
    score++;
  } else {
    result.textContent = "不正解…";
  }
}

document.querySelector("#next").addEventListener("click", () => {
  current++;
  result.textContent = "";

  if (current < questions.length) {
    showQuestion();
  } else {
    qText.textContent = `終了！正解数は ${score} 問`;
    choicesDiv.innerHTML = "";

    if (score >= 4) {
      result.textContent = "あなたは推しマスター！";
    } else {
      result.textContent = "まだまだ推しを研究しよう！";
    }
  }
});

document.querySelector("#retry").addEventListener("click", () => {
  current = 0;
  score = 0;
  result.textContent = "";
  showQuestion();
});

showQuestion();

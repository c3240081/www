const questions = [
  {
    question: "アーティストAの好きな曲はどれ？",
    choices: ["曲名①", "曲名②", "曲名③", "曲名④"],
    answer: 0
  },
  {
    question: "アーティストBの特徴として正しいものは？",
    choices: [
      "歌詞の世界観が印象的",
      "ダンス中心のグループ",
      "インスト曲のみ",
      "海外アーティスト"
    ],
    answer: 0
  },
  {
    question: "アーティストAを知ったきっかけは？",
    choices: [
      "友人の紹介",
      "テレビCM",
      "SNS",
      "ライブ会場"
    ],
    answer: 0
  },
  {
    question: "アーティストBの曲をよく聴くタイミングは？",
    choices: [
      "勉強中",
      "落ち着きたい時",
      "運動中",
      "朝起きた直後"
    ],
    answer: 1
  },
  {
    question: "推しアーティストの魅力として一番近いものは？",
    choices: [
      "曲ごとに雰囲気が違う",
      "全曲同じテンポ",
      "歌詞がない",
      "活動期間が短い"
    ],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

const questionText = document.querySelector("#question");
const choicesDiv = document.querySelector("#choices");
const resultText = document.querySelector("#result");
const nextBtn = document.querySelector("#next-btn");
const retryBtn = document.querySelector("#retry-btn");

function showQuestion() {
  questionText.textContent = questions[currentIndex].question;
  choicesDiv.innerHTML = "";
  resultText.textContent = "";

  questions[currentIndex].choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    choicesDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentIndex].answer) {
    resultText.textContent = "正解！";
    score++;
  } else {
    resultText.textContent = "不正解…";
  }
}

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionText.textContent = `クイズ終了！ 正解数：${score} / ${questions.length}`;
  choicesDiv.innerHTML = "";

  if (score >= 4) {
    resultText.textContent = "あなたは推しアーティストマスターです！";
  } else {
    resultText.textContent = "まだまだ推しを研究しよう！";
  }
}

retryBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  showQuestion();
});

showQuestion();

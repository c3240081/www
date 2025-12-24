const questions = [
  {
    question: "米津玄師が主題歌(M八七)を担当したアニメ映画はどれ？",
    choices: ["すずめの戸締まり", "君の名は", "シン・ウルトラマン", "天気の子"],
    answer: 2
  },
  {
    question: "キタニタツヤの最終学歴はどれ？",
    choices: [
      "早稲田大学　商学部",
      "東京大学　文学部",
      "慶應義塾大学　文学部",
      "明治大学　情報コミュニケーション学部"
    ],
    answer: 1
  },
  {
    question: "TOOBOEを知ったきっかけは？",
    choices: [
      "妹の紹介",
      "テレビCM",
      "SNS",
      "ライブ会場"
    ],
    answer: 0
  },
  {
    question: "紹介したアーティストの中で女性なのはだれ",
    choices: [
      "米津玄師",
      "キタニタツヤ",
      "TOOBOE",
      "YUI"
    ],
    answer: 3
  },
  {
    question: "Orangestarが多く楽曲制作に使っている音声合成ソフトはどれ？",
    choices: [
      "IA",
      "初音ミク",
      "鏡音リン",
      "GUMI"
    ],
    answer: 0
  }
];

let currentIndex = 0;
let score = 0;

const questionText = document.querySelector("#question");
const choicesDiv = document.querySelector("#choices");
const resultText = document.querySelector("#result");
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
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => btn.disabled = true);

  if (selected === questions[currentIndex].answer) {
    resultText.textContent = "正解！";
    score++;
  } else {
    resultText.textContent = "不正解…";
  }
  setTimeout(() => {
    currentIndex++;

    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  questionText.textContent = `クイズ終了！ 正解数：${score} / ${questions.length}`;
  choicesDiv.innerHTML = "";

  if (score == 5) {
    resultText.textContent = "あなたは推しアーティストマスターです！";
  } else if(score == 4){
    resultText.textContent = "あと一問で全問正解";
  } else{
    resultText.textContent = "まだまだ推しを研究しよう！";
  }
}

retryBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  showQuestion();
});

showQuestion();

const quizData = [
  {
    question: "Qual dessas bandas é a pioneira do metal?",
    options: ["Psychonaut 4", "Happy Days", "Type O Negative", "Deep Purple"],
    answer: "Deep Purple"
  },
  {
    question: "Qual dessas bandas tem o gênero 'DSBM'? ",
    options: ["Black Sabbath", "Led Zeppelin", "Lifelover", "pantera"],
    answer: "Lifelover"
  },
  {
    question: "guitarras com baixas afinações e muito distorcidas é característico do gênero: ",
    options: ["Death metal", "Nu metal", "Metal alternativo", "Heavy metal"],
    answer: "Death metal"
  },
  {
    question: "qual dessas músicas foi do primeiro album lançado pelo Black Sabatth?",
    options: ["Trashed", "Paranoid", "The Dark", "Born Again"],
    answer: "Paranoid"
  }
];

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  result.textContent = "";
  nextBtn.style.display = "none";

  const data = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="question">${data.question}</div>
    <div class="options">
      ${data.options.map(opt => `<div class="option">${opt}</div>`).join("")}
    </div>
  `;

  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", () => {
      if(option.textContent === data.answer){
        score++;
        option.style.background = "#8f8";
      } else {
        option.style.background = "#f88";
      }
      document.querySelectorAll(".option").forEach(o => o.style.pointerEvents = "none");
      nextBtn.style.display = "block";
    });
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if(currentQuestion < quizData.length){
    loadQuestion();
  } else {
    quizContainer.innerHTML = "";
    nextBtn.style.display = "none";
    result.textContent = `Fim do quiz! Você acertou ${score} de ${quizData.length}.`;
  }
});

loadQuestion();

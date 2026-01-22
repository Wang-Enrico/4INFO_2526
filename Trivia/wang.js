const quizData = [
  {
    q: "Cos'è un computer?",
    a: ["Un animale", "Una macchina che elabora dati", "Un tipo di cibo"],
    correct: 1,
    img: "https://cdn.pixabay.com/photo/2015/05/31/12/14/laptop-791256_1280.jpg"
  },
  {
    q: "Che cos'è Internet?",
    a: ["Una rete di computer", "Un singolo computer", "Un programma per disegnare"],
    correct: 0,
    img: "https://cdn.pixabay.com/photo/2014/04/03/11/55/internet-311386_1280.jpg"
  },
  {
    q: "Che cosa significa 'software'?",
    a: ["Componenti fisici del PC", "Programmi e applicazioni", "Un tipo di hardware"],
    correct: 1,
    img: "https://cdn.pixabay.com/photo/2016/03/31/18/56/software-1294750_1280.jpg"
  },
  {
    q: "Qual è l'unità base di memoria principale del computer?",
    a: ["CPU", "Hard disk", "RAM"],
    correct: 2,
    img: "https://cdn.pixabay.com/photo/2015/12/08/00/26/memory-1081860_1280.jpg"
  },
  {
    q: "Chi è il miglior prof di informatica?",
    a: ["Arruzza", "Mancuso", "Fazzone"],
    correct: 2,
    video: "mancu_inazzato.mp4"
  }
];

let current = 0;
let score = 0;

const questionEl = document.querySelector('.question');
const questionImg = document.querySelector('.question-image');
const questionVideo = document.querySelector('.question-video');
const answersEl = document.querySelector('.answers');
const nextBtn = document.querySelector('.next-btn');
const progress = document.querySelector('.progress');
const scoreContainer = document.querySelector('.score-container');

const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');

function loadQuestion() {
  const currentQuiz = quizData[current];

  questionEl.classList.remove('show');
  questionImg.style.display = 'none';
  questionVideo.style.display = 'none';

  setTimeout(() => {
    questionEl.textContent = currentQuiz.q;

    if (currentQuiz.img) {
      questionImg.src = currentQuiz.img;
      questionImg.style.display = 'block';
    }

    if (currentQuiz.video) {
      questionVideo.src = currentQuiz.video;
      questionVideo.style.display = 'block';
    }

    answersEl.innerHTML = '';

    currentQuiz.a.forEach((ans, i) => {
      const btn = document.createElement('div');
      btn.classList.add('answer');
      btn.textContent = ans;
      btn.addEventListener('click', () => selectAnswer(btn, i));
      answersEl.appendChild(btn);
    });

    nextBtn.style.display = 'none';
    progress.style.width = `${(current / quizData.length) * 100}%`;
    questionEl.classList.add('show');
  }, 300);
}

function selectAnswer(btn, i) {
  const currentQuiz = quizData[current];
  const allButtons = document.querySelectorAll('.answer');

  allButtons.forEach((b, index) => {
    if (index === currentQuiz.correct) {
      b.classList.add('correct');
    }
  });

  if (i === currentQuiz.correct) {
    btn.classList.add('correct');
    correctSound.play();
    score++;
  } else {
    btn.classList.add('wrong');
    wrongSound.play();
    allButtons[currentQuiz.correct].classList.add('correct');
  }

  nextBtn.style.display = 'block';
}

nextBtn.addEventListener('click', () => {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.querySelector('.progress-bar').style.display = 'none';
  questionEl.style.display = 'none';
  questionImg.style.display = 'none';
  questionVideo.style.display = 'none';
  answersEl.style.display = 'none';
  nextBtn.style.display = 'none';

  scoreContainer.style.display = 'block';
  scoreContainer.textContent = `Hai totalizzato ${score} su ${quizData.length}! 🎉`;
}

loadQuestion();

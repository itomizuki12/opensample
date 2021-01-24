const quiz = [
  {
    question: 'タンパク質を英語で言うと？',
    answers: [ 'カーボ', 'ファット', 'プロテイン', 'カロリー'],
    correct: 'プロテイン'
  }, {
    question: '全身筋トレをする際、最も最適な頻度は？',
    answers: [ '週２', '週3', '週４', '毎日'],
    correct: '週２'
  }, {
    question: '50kgの人が1時間ランニング(10.8km/h)した際の消費カロリーは？？',
    answers: [ '250kcal', '400kcal', '550kcal', '800kcal'],
    correct: '550kcal'
  }, {
    question: '脂質、タンパク質、糖質のうち最もカロリーが高いものはどれか',
    answers: [ '脂質', 'タンパク質', '糖質', '全て同じ'],
    correct: '脂質'
  }, {
    question: '体重１kgは何kcalか？',
    answers: [ '1600kcal', '2500kcal', '5000kcal', '7200kcal'],
    correct: '7200kcal'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
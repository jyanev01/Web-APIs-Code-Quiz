
var timer = $("#timer");
var startBtn = $("#btn-start");
var timeCounter = $("timecounter");
var titleItem = $("title-item");
var correctAnswer = $("questions-answers");
var playerScore = $("score");
var btnScore = $("btnScore");
var currentIndex = 0;
var score = 0;
var allScore = [];
var storedScores = json.parse(localStorage.getItem("userData"));

// array of questions
const myQuestions = [
  {
    question : "How many presidents has the United States had?",
    choices :{
      A: "32",
      B: "68",
      C: "46",
      D: "51"}, 
    correctAnswer : "C"
  },
  {
    question : "How many member states comprise the United Nations",
    choices :{
      A: "208",
      B: "152",
      C: "193",
      D: "I don't Know"}, 
    correctAnswer : "B"
  },
  {
    question : "Commonly uded data types DO not include",
    choices :{
      A: "A",
      B: "B",
      C: "C",
      D: "D"}, 
    correctAnswer : "A"
  },
  {
    question : "How do you create take an array and create a string",
    choices :{
      A: "JSON.stringify",
      B: "document.getElementbyId.",
      C: "Add and Element using <>",
      D: "None of the above"},
    correctAnswer : "C"
  },
  {
    title : "Which libary helps with webpage styling",
    choices :{
      A: "JQuery",
      B: "BootStrap",
      C: "Mango DB",
      D: "Node.js"},
    correctAnswer : "B"
  },
  {
    title : "What does DRY method stand for",
    choices :{
      A: "Do Right by You",
      B: "Don't Repear Yourself",
      C: "Do Repeat Yourself",
      D: "Divide Repositories Yearly"},
    correctAnswer : "B"
  },
  {
    title : "Question #7",
    choices :{
      A: "A",
      B: "B",
      C: "C",
      D: "D"},
    correctAnswer : "C"
  },
      
];


// Timer that counts down from 75
function countdown() {
  var timeInterval=  setInterval(function(){
    timer.innerText = timeLeft
    timeLeft--;
    },1000);
};




function buildQuiz(){
  // for loop can pull questions in sequence
  for (var i =0; questions.length; i++) {
  var choiceOfQuestion= questions[i].choices;

  // jQuery add choiceOfQuestion to html dynamically
  CONTENT.replaceWith(choiceOfQuestion)
  return

};

$(choiceOfQuestion).json();

  // variable to store the HTML output
  const output =[];


    // add this question and its answers to the output
    output.push(
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers">${answers.join('')} </div>
    );
  }
  // add this question and its answers to the output
  output.push(
    <div class="questions"> ${currentQuestion.question}</div>
    <div class="answers"> $ {answers.join('')}</div>
    );

  quizContainer.innerHTML = output.join(' ');
};

// event listener- button click
$(".btn-start").on("click", buildQuiz);



function showResults(){
  // gather answer containers from our quiz
  const answerContainers = quizCOntainer.querySelector('.answers');

  // keep track of user's answers
  let numCorrect = 0;
  
  // for 
}

// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestion = [...];


// on submit, show results
submitButton.addEventListener('click', showResults);


// for loop can pull questions in sequence
for (var i =0; questions.length; i++) {
  var choiceOfQuestion= questions[i].choices;

  // jQuery add choiceOfQuestion to html dynamically
  CONTENT.replaceWith(choiceOfQuestion)
  return
};

$(choiceOfQuestion).json();



function startQuiz() {
  if(storedScores !==null) {

  }
}



// 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

  





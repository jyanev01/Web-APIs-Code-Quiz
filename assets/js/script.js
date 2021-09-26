var timer = $("#timer");
var startBtn = $("#btn-start")
var score = 0;
var storedScores = 
var score = 0;
var count = 75;


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
    question : "Question #4",
    choices :{
      A: "A",
      B: "B",
      C: "C",
      D: "D"},
    correctAnswer : "C"
  },
  {
    title : "Question #5",
    choices :{
      A: "A",
      B: "B",
      C: "C",
      D: "D"},
    correctAnswer : "C"
  },
  {
    title : "Question #6",
    choices :{
      A: "A",
      B: "B",
      C: "C",
      D: "D"},
    correctAnswer : "C"
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

function buildQuiz(){
  // variable to store the HTML output
  const output =[];

  // for each questoin
  myQuestions.forEach(currentQuestion, questionNumber) ==> {
    // variable to store the list of possible answers
    const answers =[];

    // and for each available answer..
    for( letter in currentQuestion.answer) {
      // ...add an HTMl radio button
      answers.push(
        <label>
          <input type="radio" name="questions${questionNumber}" value="${letter}"></input>
            ${letter} :
            ${currentQuestion.answer[letter]}
          
        </label>
      );
    }

    // add this question and its answers to the output
    output.push(
      <div class="question"> ${currentQuestion.question} </div>
      <div class="answers">${answers.join('')} </div>
    );
  }
};

function showResults(){}

// display quiz right away
buildQuiz();

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


// event listener- button click
$(".btn-start").on("click", startQuiz);

function startQuiz() {
  if(storedScores !==null) {

  }
}


// Timer that counts down from 75
function countdown() {
  var timeInterval=  setInterval(function(){
    timer.innerText = timeLeft
    timeLeft--;
    },1000);
};

// 
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

  

// TODO: Create a variable to keep track of the score
var score=0

// TODO: Iterate over the questions array and display each question in a confirmation box
for (let index = 0; index < questions.length; index++) {
    
    var userAnswer = confirm(questions[index].q);

    if(userAnswer === questions[index].a) {
        score++;
        alert("Correct");
    } else {
        alert("Incorrect");
    };
};

alert("Final Score is "+ score + "/"+questions.length);




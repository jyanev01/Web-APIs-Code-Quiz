var timer = 75;
var score = 0;
var startBtn = $(btn-start);

// array of questions
var questions = [
  {
    title : "How many presidents has the United States had?",
    choices :["32","68","46","51"], 
    answer : "46"
  },
  {
    title : "How many member states comprise the United Nations",
    choices :["208","152","193","I don't Know"], 
    answers : "193"
  },
  {
    title : "Commonly uded data types DO not include",
    choices :["A","B","C","D"], 
    answer : ["A"]
  },
  {
    title : "Question #4",
    choices :["A","B","C","D"],
    answer : ["C"]
  },
  {
    title : "Question #5",
    choices :["A","B","C","D"],
    answer : ["C"]
  },
  {
    title : "Question #6",
    choices :["A","B","C","D"],
    answer : ["C"]
  },
  {
    title : "Question #7",
    choices :["A","B","C","D"],
    answer : ["C"]
  },
      
];

// for loop can pull questions in sequence
for (var i =0; questions.length; i++) {
  var choiceOfQuestion= questions[i].choices;

  // jQuery add choiceOfQuestion to html dynamically
  CONTENT.replaceWith(choiceOfQuestion)
  return
};

// event listener- button click
$(".btn-start").on("click", startQuiz);

function startQuiz() {
  if(storedScores !==null) {}
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

  
// TODO: Create an array with five question objects
var questions=[
    { q:"Is the skye blue?", a: true},
    { q:"Are bananas are vegetables?", a: false},
    { q:"Was the delcaration of indepenced written in 1745?", a: false},
    { q:"365 days in a year", a: true},
    { q:"42 ounces in a pound", a: false},
];



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




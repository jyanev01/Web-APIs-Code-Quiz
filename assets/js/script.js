var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

// Timer that counts down from 5
function countdown() {
    var timeLeft = 75;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // alert("One second has passed")
      if (timeLeft >1) {
        
        timerEl.textContent= timeLeft + " seconds remaining";  
        }else {
          timerEl.textContent= timeLeft + " second remaining";
        } 
  
        if(timeLeft === 0){
          clearInterval(timeInterval);
          timerEl.textContent=""
          displayMessage();
        }
        timeLeft--;
  
    }, 1000);
    
};

// 
  
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

// TODO: Check the user's answer against the correct answer


// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score



// Displays the message one word at a time


startBtn.onclick = countdown;

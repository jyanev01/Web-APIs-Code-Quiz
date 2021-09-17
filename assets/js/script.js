// TODO: Create an array with five question objects
var questions=[
    { q:"skye blue?", a: true},
    { q:"bananas are vegetables?", a: false},
    { q:"delcaration of indepenced was 1745", a: false},
    { q:"365 days in a year", a: true},
    { q:"42 ounces in a pound", a: false},
];



// TODO: Create a variable to keep track of the score
var score=0

// TODO: Iterate over the questions array and display each question in a confirmation box
for (let index = 0; index < questions.length; index++); {
    
    var userAnswer = confrim(questions[index].q);

    if(userAnswer === questions[index].q) {
        score++;
        alert("Correct");
    } else {
        alert("Incorrect");
    }
}

alert("Final Score is "+ score + "/"+questions.length);

// TODO: Check the user's answer against the correct answer


// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score

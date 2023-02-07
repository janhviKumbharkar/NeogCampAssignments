// replit link : https://replit.com/@Janhvi412/CLI-quiz-app#index.js

// Project: DO YOU KNOW ME? CLI Quiz App
const input = require('readline-sync');
var userName = input.question(' What is your name? ');
console.log("Welcome "+userName + " to DO YOU KNOW Janhvi?");

// array
var questions = [{
  question : "Where do I live? "+"\n",
  answer : "Nagpur"
},
{
  question : "My favorite Boyband would be? "+"\n",
  answer : "BTS"
},
{
  question : "What am i studying? "+"\n",
  answer : "B.Tech"
},
{
  question : "Where am i studying? "+"\n",
  answer : "SBJITMR"
},
{
  question : "What skills do i have? "+"\n",
  answer : "Web development"
}];

// function
var score=0;
function play(question,answer){
  const userAnswer = input.question(question);
  if(userAnswer===answer){
    console.log("right!");
    score=score+1;
  }
  else{
    console.log("wrong!");
    score=score-1;
  }
  console.log("current score:  "+ score);
  console.log("-----------------------");
}

// loops
function game(){
for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}}

game();
console.log("YAY! You SCORED: ", score);

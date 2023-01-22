// replit link : https://replit.com/@Janhvi412/CLI-quiz-app2#index.js

// Project: Fandom quiz. CLI Fandom Quiz App
const input = require('readline-sync');
var userName = input.question(' What is your name? ');
console.log("Welcome "+userName + " to HOW WELL YOU KNOW BTS?");

// array
var questions = [{
  question : " How many members are in BTS?"+"\n",
  answer : "Seven"
},
{
  question : "What does BTS stand for? "+"\n",
  answer : "Bangtan Sonyeondan"
},
{
  question : "Which members are the rappers of the group? "+"\n",
  answer : "RM, J-Hope, and Suga"
},
{
  question : "Which member is the maknae (youngest) of the group? "+"\n",
  answer : "Jungkook"
},
{
  question : "Who is the leader of the group? "+"\n",
  answer : "RM"
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

var readLineSync=require("readline-sync");
var chalk=require("chalk");
var log=console.log;
var error=chalk.bgRed.bold;
var correct=chalk.bgGreen.bold.underline;

//Welcome user
var userName= readLineSync.question("Please enter your name: ");
log("Welcome "+userName+" to", chalk.bold.bgYellow.italic("\'Do you know Chalk, the popular terminal string styling npm package?\'"));

//High Score data structure
var topScorers=[{
  name: "Sasikala",
  score: 4
},
{
  name: "Pradhyun",
  score: 4
}];

//Q&A array
var questions=[
  {
    question: "Which of the following is " +chalk.red.underline("not")+ " a correct syntax:\n"+
    "a. console.log(chalk.bold.rgb(10, 100, 200)('Hello!'+' world'))\n"+
    "b. console.log(chalk`{ bold.rgb(10,100,200) Hello! world}`)\n"+
    "c. console.log(chalk.bold.rgb(10, 100, 200)`Hello! world`)\n"+
    "d. console.log(chalk.bold.rgb(10,100,200)('Hello!','world');)\n"+     
    "Type the correct answer as a, b, c or d.",
    answer: "b"
  },
  {
    question: "The backbone of Chalk is -----------\n"+
    "a. ECMA escape codes\n"+
    "b. ANSI escape codes\n"+
    "c. ASCI escape codes\n"+
    "d. ISO escape codes\n"+
    "Type the correct answer as a, b, c or d.",
    answer: "b"
  },
  {
    question: "Which of the following is " +chalk.red.underline("not")+ " a correct chalk style modifier:\n"+
    "a. dim\n"+
    "b. underline\n"+
    "c. strikethrough\n"+
    "d. superscript\n"+
    "Type the correct answer as a, b, c or d.",
    answer: "d"
  },
  {
    question: "Chalk extends string.prototype.\n"+
    "a. True\n"+
    "b. False\n"+
    "Type the correct answer as a or b.",
    answer: "b"
  },
  {
    question: "Chalk.level with a value of 3 supports truecolor (16 million colors)\n"+
    "a. True\n"+
    "b. False\n"+
    "Type the correct answer as a or b.",
    answer: "a"
  }

]

//Leaderboard
var textBlock=[];
function leaderBoard(array){
  for (var j=0; j<array.length; j++){
    textBlock.push(`${j+1}. ${array[j].name}: ${array[j].score}`);
    //console.log(textBlock);
  }
  return textBlock.join("\n");
}

//Quiz
var score=0;
for (var i=0; i<questions.length; i++){
var answer=readLineSync.question(questions[i].question);
  if (answer.toUpperCase()===questions[i].answer.toUpperCase()){
    log(correct("You are right!"));
    score=score+1;
  }else{
    log(error("Better luck next time!"));
  }  
  log("-----------------------");
}
console.log("Your total score is: ",score);

//Update topScorers
if (score===topScorers[0].score){
  topScorers.push({
    name: userName,
    score: score
  });
} else if (score > topScorers[0].score){
  topScorers =[];
  topScorers.push({
    name: userName,
    score: score
  });
}
console.log(`The top scorer/s is/are:
${leaderBoard(topScorers)}
Please share a screenshot of your score to update our database.`);
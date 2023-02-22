//Variables
let userChoise;
let computerChoise;
let finalResult;
let roundResult;
let rounds;
let computerScore = 0;
let userScore = 0;

//Rounds
  rounds = parseInt(prompt("How many times do you want to play?"));
  if (rounds === 1) {console.log("There is going to be " + rounds + " round");
  } else {console.log("There are going to be " + rounds + " rounds")};

//Loop
  for(let i = 0; i < rounds; i++) {
  console.log("Round " + (i+1));

  //User choise
   userChoise = prompt("Round " + (i+1) + "! " + "Do you pick rock, paper, or scissors? (enter r, p, or s)");

   console.log("User chose " + userChoise);

  //Computer choice generation
   const randomNumber = (Math.floor(Math.random() * 3) + 1);
  
   if (randomNumber === 1) {
      computerChoise = "r";
    } else if (randomNumber === 2) {
      computerChoise = "p";
   } else {
     computerChoise = "s"};

   console.log("CPU chose " + computerChoise);
 
  //Round results
   if (computerChoise === "r" && userChoise === "p") {
    userScore ++;
    roundResult = "You win! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else if (computerChoise === "p" && userChoise === "s") {
    userScore ++;
    roundResult = "You win! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else if (computerChoise === "s" && userChoise === "r") {
    userScore ++;
    roundResult = "You win! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else if (computerChoise === "r" && userChoise === "s") {
    computerScore ++;
    roundResult = "You lose! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else if (computerChoise === "p" && userChoise === "r") {
    computerScore ++;
    roundResult = "You lose! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else if (computerChoise === "s" && userChoise === "p") {
    computerScore ++;
    roundResult = "You lose! (CPU chose " + computerChoise + ", you chose " + userChoise + ")";
   } else {
    roundResult = "Its a draw! (CPU chose " + computerChoise + ", you chose " + userChoise + ")"};
    
   console.log(roundResult);
   alert(roundResult);
};

//Final result
    if (computerScore > userScore) {
  finalResult = "YOU LOST! Final result: CPU " + computerScore + " - You " + userScore;
  } else if (computerScore < userScore) {
    finalResult = "YOU WON! Final result: You " + userScore + " - CPU " + computerScore;
  } else {
    finalResult = "ITS A DRAW! Final result: You " + userScore + " - CPU " + computerScore};
  
  console.log(finalResult);
  alert(finalResult);
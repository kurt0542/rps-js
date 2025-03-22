while (true) {
    let rps = ["rock", "paper", "scissor"];
    let playerChoice = prompt("Enter your choice: rock, paper or scissors \nEnter \"stop\" to stop the game");
    playerChoice = playerChoice.toLowerCase();
  
    if (playerChoice === "stop") {
      console.log("Game over");
      break;
    }
  
    let player; 
    switch (playerChoice) {
      case "rock":
        player = 0;
        break;
      case "paper":
        player = 1;
        break;
      case "scissor":
        player = 2;
        break;
      default:
        console.log("Invalid choice");
        continue; 
    }
  
    let computer = Math.floor(Math.random() * 3);
    console.log(`Player: ${rps[player]} vs Computer: ${rps[computer]}`);
  
    if (player === computer) {
      console.log("It's a tie!");
    } else if (
      (player === 0 && computer === 2) ||
      (player === 1 && computer === 0) ||
      (player === 2 && computer === 1)
    ) {
      console.log("Player wins!");
    } else {
      console.log("Computer wins!");
    }
  }
  
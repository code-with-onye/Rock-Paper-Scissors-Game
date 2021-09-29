const handOption = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissors: "/assets/Scissors.png",
};

let score = 0;

//check what user choose
const pickUserHand = (hand) => {
  //hide the current hand
  console.log(hand);
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  //display the new hand
  let contest = document.querySelector(".contest");
  contest.style.display = " flex";

  //set the user pickUserHand

  document.getElementById("userPickImage").src = handOption[hand];
};

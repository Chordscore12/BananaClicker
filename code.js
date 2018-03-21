var score = 0;
var lives = 3;
onEvent("start_button", "click", function() {
  setScreen("game_screen");
  setText("lives", "3");
  setText("score", "0");
});
onEvent("Banana", "click", function() {
  setPosition("Banana", randomNumber(50,280), randomNumber(50, 350));
  score = score + 1;
  setText("score", score);
  if (score === 50) {
    setScreen("win_screen");
  }
});
onEvent("background", "click", function() {
  lives = lives - 1;
  setText("lives", lives);
  if (lives === 0) {
    setScreen("lose_screen");
  }
  }
);
onEvent("playAgain_button", "click", function() {
  setText("lives", "3");
  setText("score", "0");
  setScreen("game_screen");
});
onEvent("tryAgain_button", "click", function() {
  setScreen("welcome_screen");
});

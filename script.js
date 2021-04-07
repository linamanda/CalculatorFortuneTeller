var fortuneButton = document.getElementById("fortune-button");
var halfButton = document.getElementById("half-button");

var userNumInp = document.getElementById("half-input");
var userNameInp = document.getElementById("fortune-input");
var fortuneOutput = document.getElementById("fortune-output");

fortuneButton.addEventListener("click", fortune);
halfButton.addEventListener("click", half);

function half(num) {
  var userNum = userNumInp.value;
  var result = userNum / 2;

  alert("Half of " + userNum + " is " + result);
  console.log("Half of " + userNum + " is " + result);
}

var nounArr = ["You", "Your day", "Your love life", "Your spirit"];
var adjectiveArr = ["will be fine", "will bloom", "will need a break", "will be in peril"];

function fortune(userName) {
  randNounInd = Math.floor(Math.random() * nounArr.length);
  randAdjInd = Math.floor(Math.random() * adjectiveArr.length);

  var userName = userNameInp.value
  fortuneOutput.innerText = userName + ": " + nounArr[randNounInd] + " " + adjectiveArr[randAdjInd];
  restyle();
}

function restyle() {
  var randStyle1 = Math.floor(Math.random() * 3);
  var randStyle2 = Math.floor(Math.random() * 2);

  fortuneOutput.style.color = "rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")";

  if (randStyle1 == 0) {
    fortuneOutput.style.textDecoration = "green wavy underline";
  }
  else if (randStyle1 == 1) {
    fortuneOutput.style.textDecoration = "underline dotted red";
  }
  else {
    fortuneOutput.style.textDecoration = "underline";
  }

  if (randStyle2 == 0) {
    fortuneOutput.style.fontWeight = "bold";
  }
  else {
    fortuneOutput.style.fontWeight = "normal";
  }
}

//  document.getElementById("count-el").innerHTML = 5

//  let count = 0
//  console.log(count)

//   age found
//  let myAge = 17;
//  console.log(myAge)

//  Exercise of javascript variables

//  found how many student are present in batch one and two
//  let firstBatch = 5
//  let secondBatch = 7

//  let count = firstBatch + secondBatch
//  console.log(count)

//  find the age of your dog using your age age
//  let myAge = 17
//  let HumanDogRatio = 7

//  myDogage = myAge * HumanDogRatio
//  console.log(myDogage)

//  Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
//  Decrease it down to 25, and then finally increase it to 70
//  Console.log the value after each step
//  let bonusPoints = 50;
//  console.log(bonusPoints);

//  bonusPoints = bonusPoints + 50;
//  console.log(bonusPoints);

//  bonusPoints = bonusPoints - 75;
//  console.log(bonusPoints);

//  bonusPoints = bonusPoints + 45;
//  console.log(bonusPoints);

//  setting up the race ___

//  console.log(5);
//  console.log(4);
//  console.log(3);
//  console.log(2);
//  console.log(1);

//  GO
//  players are running the race
//  race is finished

//  Get ready for a  new race

//  console.log(5);
//  console.log(4);
//  console.log(3);
//  console.log(2);
//  console.log(1);

//  function Countdown() {
//    console.log(5);
//    console.log(4);
//    console.log(3);
//    console.log(2);
//    console.log(1);
//  }

//  Countdown();

//  Countdown();

//  write a function and get your name on console
//  function Amol() {
//    console.log("Amol shelke");
//  }

//  Amol();

//  exercise

//  let lap1 = 30;
//  let lap2 = 32;
//  let lap3 = 34;

//  create a function that logs out the sum of all lap times

//  function LapTimes() {
//      let allTime = lap1 + lap2 + lap3
//      console.log(allTime)
//  }

//  LapTimes()

//  let LapsCompleted = 0

//  create a function that increments the lapsCompleted variable with one
//  run it three times

//  function incrementLap() {
//      LapsCompleted = LapsCompleted + 1
//      console.log(LapsCompleted)
//  }

//  incrementLap()
//  incrementLap()
//  incrementLap()

//  basics of string in javascript
// let username = " Javascript";

// console.log(username);

//  the output will be javascript on the console

//  Exercise of string
//  create a variable, message that store the string: you have three new messeges

// let message = "You have three new messages ";

// console.log(message + ", " + usename + "!");

//  create a variable , Messagetouser, that contains the message heve logged
// let messageToUser = message + ", " + usename + "!";
// console.log(messageToUser);

//  Create two variables, name and greeting. The name variable should store your name,
//  and the greeting should store e.g. "Hi, my name is "

//  Create a third variable, myGreeting, that contatenates the two strings
//  Log myGreeting to the console

// let name = "Amol Shelke";
// let greeting = "Hi My Name is";

// let myGreeting = greeting + " " + name;
// console.log(myGreeting);

//  string vs number
// let points = 32
// let bonusPoints = "10"

// let bonusPoints = points + bonusPoints
// console.log(bonusPoints)

//  the output on the console will  be 3210 becuase in string vs number the string wil win

//  think about five minute and answer what will be the output of all this on console
// console.log(4 + 5) the output will be 9
// console.log("2" + "4") The output will be "24"
// console.log("5" + 1) The output will be "51"
// console.log(100 + "100") The output will be "100100"

// Exercise
// grap the welcom-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el")

// create two variable name and greeting that contains your name and the greeting we want to render on the page

// let name = "Amol shelke"
// let greeting = "Welcome back "

// Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name

// add an Emoji to the end
// write your code below here
// Hint: count = count + 1

// welcomeEl.innerText += "💕"


// The functionality of the page
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveNumber = count + " - ";
  saveEl.textContent += saveNumber;
  countEl.textContent = 0;
  count = 0;
}

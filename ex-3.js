//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
let message;
lightBulbStatus == "On"
    ? message = "Light bulb is On."
    : lightBulbStatus == "Off"
    ? message = "Light bulb is Off."
    : "Please choose the correct input (On/Off)"

console.log(message)
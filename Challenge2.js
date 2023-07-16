const readlineSync = require('readline-sync');

// Prompt user to enter the speed of the car
const speed = parseInt(readlineSync.question("Enter the speed of the car (in km/h): "));
const speedLimit = 70;
let demeritPoints = 0;

if (speed < speedLimit) {
    // If speed is less than speed limit, print "Ok"
    console.log("Ok"); 
    
} else {
    // Calculate the demerit points
    demeritPoints = Math.floor((speed - speedLimit) / 5);

    // Print the number of demerit points
    console.log("Points:", demeritPoints); 

    if (demeritPoints > 12) {
        // If demerit points exceed 12, print "License suspended"
        console.log("License suspended"); 
    }
}
//import prompt for node js

const readlineSync = require('readline-sync');

const number = readlineSync.question('Enter Marks: ');

//prompt user to enter marks
const marks = parseFloat( number);

//check if marks is between 0 to 100
if (marks>=0 && marks <=100){
    if (marks>79){
        console.log("A")
    }
    else if(marks>60){
             console.log("B")
    }
    else if(marks>49){
        console.log("C")
    }
    else if(marks>40){
        console.log("D")

    }
    else {
        console.log("E")
    }
}else{
    // throw error if marks is out of range
    console.log("Invalid input")

    
}



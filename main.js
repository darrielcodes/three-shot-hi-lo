const prompt = require('prompt-sync')({sigint: true});

console.log("I'm thinking of a number between 1 and 100. Try to guess it.");
let guess = Number(prompt(console.log(">")));
let x = Math.floor((Math.random()*100)+1);
let count = 0;

while (count < 2 && guess !== x){

    if (guess < x){
        console.log("Sorry, too low! Try again.")
        guess = Number(prompt("> "))
 } else if (guess > x){
        console.log("Sorry, too high! Try again.")
        guess = Number(prompt("> "))}

count = count + 1
} 

if (guess === x){
    console.log("Congrats: " + guess + " is correct.")}
    else if (count === 2 && guess !== x && guess < x){
    console.log("Sorry, too low. I was thinking of: " + x)}
    else if(count === 2 && guess !== x && guess > x){
    console.log("Sorry, too high. I was thinking of: " + x)}
    else{
        console.log("Error.")
}
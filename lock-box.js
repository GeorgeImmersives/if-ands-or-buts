const prompt = require('prompt-sync')();

const pin = 7654;

let guess = Number(prompt('Guess the safe combination to crack it! '));

if(guess == pin){
    console.log('Success!');
}
else{
    console.log('Failure!');
}
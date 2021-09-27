const prompt = require('prompt-sync')();

const billAmount = 524;
let amountOwed = billAmount/2;

console.log(amountOwed);

var person1 = Number(prompt('How much has person 1 paid? '));

var person2 = Number(prompt('How much has person 2 paid? '));

if(person1 == amountOwed && person2 == amountOwed){
    console.log('Neither person owes anything!')
}
if(person1 < amountOwed || person1 > amountOwed){
    console.log(`Person 1 owes $${amountOwed - person1}`);
}
if(person2 < amountOwed || person2 > amountOwed){
    console.log(`Person 2 owes $${amountOwed - person2}`);
}
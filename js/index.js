// Iteration 1: Names and Input
let hacker1 = 'driver';
console.log("The driver's name is ", hacker1);

let hacker2 = 'navigator';
console.log ("The navigator's name is", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  } 
  
  else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has  ${hacker2.length} characters.`)
   
  } else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
//3.1 

hacker1 = "John";

let hackerString = "";
for (let i = 0; i < hacker1.length; i++) {
   hackerString += hacker1[i] + ' ';
};
console.log (hackerString.toUpperCase());


//3.2

let hackerReverse = "";
    for (let i = hacker1.length - 1; i >= 0; i--) {
        hackerReverse += hacker1[i] + ' ';
    }
    console.log(hackerReverse);

//3.3

console.log (hacker2);

if ('hacker1'.localeCompare('hacker2') < 0) {
  console.log (`The driver's name goes first.`)

} else if ('hacker1'.localeCompare('hacker2') > 0) 
{
  console.log (`Yo, the navigator goes first definitely.`)
} else {'What?! You both have the same name?'}

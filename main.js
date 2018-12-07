let responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes, definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];
// your code, here
// Confirm the correct number of responses have been stored by printing the number to the console (`20`)
console.log(responses.length);
// Ask the user what their question is, and store it as a variable called `question`
let question = prompt(`What is your question?`);
// Output a random response to the user's question
let num = Math.floor(Math.random() * responses.length) + 1;
console.log(`The rendom resposnse is: ${responses[num]}`);
// Output the number of responses that include the word "yes"
let numWords=0;
responses.forEach((response)=>{
  if (response.includes('yes')){
    numWords++;
  }
});
console.log(`There are ${numWords} responses that contain 'yes'`);
// Output the number of responses that include the words "no" or "not"
let numNegWords =0;
responses.forEach((response)=>{
  if (response.includes('not')){
    numNegWords++;
  }
});
console.log(`There are ${numNegWords} responses that contain 'no' or 'not'`);
// Output the alphabetized list of responses
responses.sort();
console.log(responses);
// Output the first and last responses from the alphabetized list
console.log(`First response is ${responses[0]}`);
console.log(`Last response is ${responses[-1]}`);
// Delete two of the negative responses
for (i=0;i<responses.length;i++){
  if(responses[i].includes('not')){
    responses.splice(i,1);
  }
}
console.log(responses);
// Reassign 'Ask again later' to the beginning of the array
response = responses[1];
responses.splice(1,1);
responses.unshift(response);
console.log(responses);
// Add 1 response of your choosing to the current list
responses = responses.concat('Nothing much');
console.log(responses);
// Concat an **array** of 3 additional responses to the current list
responses = responses.concat('Way');
responses = responses.concat('Better');
responses = responses.concat('Than');
console.log(responses);
// Confirm the correct number of responses have been removed and added by printing the number of responses to the console (`22`)
console.log(responses.length);

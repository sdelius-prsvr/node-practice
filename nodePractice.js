// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)

console.log('Hello there, ' + firstName + ' ' + lastName + ".  You're precisely on time.  On your time, that is.  By everyone else's time, you're quite late.")

console.log('Did you know "' + firstName.toUpperCase() + lastName.toUpperCase() + '"' + " is how your name would have been written in Ancient Rome?  No spacesandALLCAPS.  Kind of makes you wonder if John Backus was born quite a bit before 1924, doesn't it?")

console.log("By the way, do you have all your things monogrammed with " + firstName[0] + lastName[0] + "?  Oh dear.  Well, let's just hope no one else has those intitials.  Not that I can imagine why anyone would, what with how perfectly hideous they each look, let alone sitting there side by side.")

console.log("Anyway, due to your tardiness, I'm afraid there isn't any room left for you specifically on our private email server, so you'll just have to use " + '"' + (firstName[0]).toLowerCase() + lastName.toLowerCase() + '.prsvr@gmail.com" until someone is fired, quits, or dies.  Well, that should be everything.  Good luck, and whatever you do, don' + "'" + 't look under your desk.  Ta-ta!')
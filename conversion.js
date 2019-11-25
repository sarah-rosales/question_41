const readlineSync = require("readline-sync");

const inches_in_miles = 63360;
const feet_in_miles = 5280;
const yards_in_miles = 1760;
const kilometers = "kilometers";
const miles;
let origin = readlineSync.question("Enter an origin unit: ");

console.log();

while (origin = "kilometers" || origin = "miles") {
   origin = readlineSync.question("Enter an origin unit: ");
}

import { greet } from "./js-module.js";
import { createButton, createButtons } from "./01-create-button.js";
/*
console.log('Hello, oezgue!');
*/
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function logPlanets() {
  console.log('Here is a list of the planets:');

  planets.map( (planet) => {console.log('Hello ' + planet)});
}
/*
logPlanets();
*/

/*
// Call function from another file
greet();
*/
/*
createButton();
*/
createButtons(planets);
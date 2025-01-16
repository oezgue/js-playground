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
createButton(); // create a button with javascript
*/
/*
createButtons(planets); // render many buttons from the planets array
*/

// Rest API with Backend
fetch("http://localhost:8080/hello")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

console.log('Hello, oezgue!');
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function logPlanets() {
  console.log('Here is a list of the planets:');

  planets.map( (planet) => {console.log('Hello ' + planet)});
}

logPlanets();
// Create a function called countFroyoFlavors
const countFroyoFlavors = () => {
  const userInput = prompt(`Enter a list of comma-separated froyo flavors (Case Sensative): `);

  //Split input string into an array of flavors
  const flavors = userInput.split(`,`);

  // Create an object to store the count of each flavor
  let flavorCount = {};

  // Go through flavors and update count
  for( const flavor of flavors) {
    if(flavorCount[flavor]) {
      flavorCount[flavor]++;
    } else {
      flavorCount[flavor] = 1;
    }
  }
    // return total amount of scoops associated with the flavor
    console.table(flavorCount);
}

// Invokes function
countFroyoFlavors();



// return total amount of scoops associated with the flavor
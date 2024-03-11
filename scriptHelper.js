// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (testInput === "" || testInput === undefined) {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else if (!isNaN(testInput)) {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
  const pilotValidation = validateInput(pilot);
  const coPilotValidation = validateInput(copilot);
  const fuelValidation = validateInput(fuelLevel);
  const cargoValidation = validateInput(cargoMass);

  if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
    alert("All fields are required!");
    return;
  }

  if (
    pilotValidation === "Not a Number" &&
    coPilotValidation === "Not a Number"
  ) {
    console.log("testing");
    document.getElementById("pilotStatus").textContent = `${pilot} is Ready`;
    document.getElementById(
      "copilotStatus"
    ).textContent = `${copilot} is Ready`;
  } else {
    alert("Enter valid input for pilots");
  }
  if (fuelValidation === "Is a Number" && fuelLevel < 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML =
      "Not enough fuel for takeoff";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";
  } else if (fuelValidation === "Is a Number" && fuelLevel > 10000) {
    list.style.visibility = "visible";
    document.getElementById("fuelStatus").innerHTML =
      "Fuel amount ready for takeoff";
    document.getElementById("launchStatus").style.color = "green";
  } else if (fuelValidation !== "Is a Number") {
    alert("Enter valid input for fuel.");
  }

  if (cargoValidation === "Is a Number" && cargoMass > 10000) {
    list.style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML =
      "Too much mass for shuttle to take off";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = "red";
  } else if (cargoValidation === "Is a Number" && cargoMass < 10000) {
    list.style.visibility = "visible";
    document.getElementById("cargoStatus").innerHTML =
      "Mass amount ready for takeoff";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle ready for launch";
    document.getElementById("launchStatus").style.color = "green";
  } else if (cargoValidation !== "Is a Number") {
    alert("Enter valid input for cargo.");
  }
}

// async function myFetch() {
//   let planetsReturned;

//   planetsReturned = await fetch().then(function (response) {});

//   return planetsReturned;
// }

// function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

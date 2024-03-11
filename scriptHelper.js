// Write your helper functions here!

//require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = `                 <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name} </li>
      <li>Diameter:${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
  </ol>
  <img src="${imageUrl}">`;

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
    document.getElementById(
      "pilotStatus"
    ).textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById(
      "copilotStatus"
    ).textContent = `Co-pilot ${copilot} is ready for launch`;
    document.getElementById("launchStatus").style.color = "green";
    list.style.visibility = "visible";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle is Ready for Launch";
  } else {
    alert("Enter valid input for pilots");
  }
  if (fuelValidation === "Is a Number" && fuelLevel < 10000) {
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level too low for launch";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
  } else if (fuelValidation === "Is a Number" && fuelLevel >= 10000) {
    document.getElementById("fuelStatus").innerHTML =
      "Fuel level high enough for launch";
  } else if (fuelValidation !== "Is a Number") {
    alert("Enter valid input for fuel.");
  }

  if (cargoValidation === "Is a Number" && cargoMass > 10000) {
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass too heavy for launch";
    document.getElementById("launchStatus").innerHTML =
      "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
  } else if (cargoValidation === "Is a Number" && cargoMass <= 10000) {
    document.getElementById("cargoStatus").innerHTML =
      "Cargo mass low enough for launch";
  } else if (cargoValidation !== "Is a Number") {
    alert("Enter valid input for cargo.");
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    // console.log(response);
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  const randomIndex = Math.floor(Math.random() * planets.length);
  const randomPlanet = planets[randomIndex];
  return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

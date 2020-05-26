// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]"); 
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All Fields Required");
      };
      if (typeof pilotNameInput.value !== "string") {
         alert("Name Input for the Pilot must be a name written as a string.");
      };
      if (typeof copilotNameInput.value !== "string") {
         alert("Name Input for the Co-Pilot must be a name written as a string.");
      };
      if (isNaN(fuelLevelInput.value)) {
         alert("Input for the fuel field must be a number.");
      };
      if (isNaN(cargoMassInput.value)) {
         alert("Input for the mass field must be a number.");
      };
   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

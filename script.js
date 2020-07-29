// Write your JavaScript code here!
window.addEventListener("load", function(){
   let launchForm = document.querySelector("form");

   let items = document.getElementById("faultyItems");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");

   launchForm.addEventListener("submit", function(event){

      let pilot = String(document.getElementById("pilotName").value);
      let copilot = String(document.getElementById("copilotName").value);
      let fuel = Number(document.getElementById("fuelLevel").value);
      let cargo = Number(document.getElementById("cargoMass").value);
      
      if(pilot === "" || copilot === "" || isFinite(pilot) || isFinite(copilot) || isNaN(fuel) || isNaN(cargo) || fuel == 0 || cargo == 0){
         alert("All Fields Required!\nUse only letters for Pilot and Co-Pilot names.\nUse only numbers for Fuel Level and Cargo Mass");
         event.preventDefault();
      }

      if(fuel < 10000){
         fuelStatus.innerHTML = "There is not enough fuel for the journey!";
         launchStatus.innerHTML = "Shuttle Not Ready For Launch!";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `${pilot} Ready`;
         copilotStatus.innerHTML = `${copilot} Ready`;

      }
      
      if(cargo > 10000){
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off!"
         launchStatus.innerHTML = "Shuttle Not Ready For Launch!";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `${pilot} Ready`;
         copilotStatus.innerHTML = `${copilot} Ready`;
      }

      if(cargo < 10000 && fuel > 10000 && cargo != 0){
         launchStatus.innerHTML = "Shuttle Is Ready For Launch!";
         launchStatus.style.color = "green";
         pilotStatus.innerHTML = `${pilot} Ready`;
         copilotStatus.innerHTML = `${copilot} Ready`;
      }
      

      document.getElementById("faultyItems").style.visibility = "visible";
      
      
      event.preventDefault()
   })
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const mission = document.getElementById("missionTarget");

         mission.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
            <li>Number of Moons: ${json[2].moons}</li>
         </ol>
         <img src="${json[2].image}">`;
      });
   });
   
   


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

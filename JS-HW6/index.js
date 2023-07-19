/*

Concept of asynchronous programming in JavaScript
--------------------------------------------------------------------------------------
JavaScript code compiles starting from top to bottom, synchronously.
This means code doesn't stop running, which would make things a lot harder.
For example, if you fetch any data, other things should wait for it. 
To fix this we have asynchronous JS. Event handler are basic version of this,
they don't start unless you do something that triggers an event.
Or, if we need multiple things to run at the same time, then we need asynchronous code.
In other words async JS code let us to do multiple actions while the main part 
of the code still compiles without pausing and waiting for other code blocks to finish.

*/

const result = document.getElementById("result");
const findButton = document.getElementById("find-by-ip");

const fetchIP = async () => {
  return (await fetch("https://api.ipify.org/?format=json"))
    .json()
    .then((data) => data.ip);
};

const fetchLoc = async (ipAddress) => {
  return await (await fetch(`http://ip-api.com/json/${ipAddress}`)).json();
};

const renderData = (ipAddress, locationData) => {
  const { country, regionName, city, org, continent } = locationData;
  result.innerHTML = `
    <p>IP Address: ${ipAddress}</p>
    <p>Continent: ${continent}</p>
    <p>Country: ${country}</p>
    <p>Region: ${regionName}</p>
    <p>City: ${city}</p>
    <p>Provider: ${org}</p>
  `;
};

findButton.onclick = async () => {
  result.innerHTML = "Loading...";
  const ipAddress = await fetchIP();
  const locationData = await fetchLoc(ipAddress);
  renderData(ipAddress, locationData);
};

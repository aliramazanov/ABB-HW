const resultElement = document.getElementById("result");
const findIpButton = document.getElementById("find-by-ip");

async function fetchIpAddress() {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();
  return data.ip;
}

async function fetchLocationData(ipAddress) {
  const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
  const data = await response.json();
  return data;
}

function displayLocationData(ipAddress, locationData) {
  resultElement.innerHTML = `
        <p>IP Address: ${ipAddress}</p>
        <p>Country: ${locationData.country}</p>
        <p>Region: ${locationData.regionName}</p>
        <p>City: ${locationData.city}</p>
        <p>Provider: ${locationData.org}</p>
    `;
}

findIpButton.addEventListener("click", async () => {
  resultElement.innerHTML = "Data is on the way...";

  const ipAddress = await fetchIpAddress();
  const locationData = await fetchLocationData(ipAddress);

  displayLocationData(ipAddress, locationData);
});

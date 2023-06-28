/* 

What is AJAX?
AJAX is a method which works with XMLHttpRequest Object of the browser.
It makes possible to transfer data between server and client sides (usually asynchronously).
It sends a request to the server, server processes it and returns the needed data as JSON (Usually).
We can update the data on the page without needing to refresh the browser when using AJAX.
The request to the server is done with the help of HTTP.
We can define the request method and set asynchronously nature of AJAX when we are calling open() method, (default is true).

*/

function loadData(url) {
  return new Promise((resolve, reject) => {
    const xReq = new XMLHttpRequest();
    xReq.open("GET", url);

    xReq.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          try {
            resolve(JSON.parse(this.responseText));
          } catch (error) {
            reject(new Error("Failed to parse the response: " + error.message));
          }
        } else {
          reject(new Error("Request Failed!"));
        }
      }
    };

    xReq.send();
  });
}

function passUrl(url) {
  return loadData(url);
}

passUrl("https://ajax.test-danit.com/api/swapi/films")
  .then((episodes) => {
    episodes.forEach((episode) => {
      displayeEpisodeNames(episode);
      displayCharacters(episode);
    });
  })
  .catch((error) => console.error("Failed to load episodes: ", error));

function displayeEpisodeNames(episode) {
  const getContainer = document.getElementById("container");
  const episodeName = document.createElement("h2");
  episodeName.textContent = `Episode ${episode.episodeId}: ${episode.name}`;
  getContainer.appendChild(episodeName);
}

function displayCharacters(episode) {
  const getContainer = document.getElementById("container");
  const characterList = document.createElement("ul");

  episode.characters.forEach((characterUrlArrayElement) => {
    loadData(characterUrlArrayElement)
      .then((fetchedCharacterData) => {
        const characterName = document.createElement("li");
        characterName.textContent = fetchedCharacterData.name;
        characterList.appendChild(characterName);
      })
      .catch((error) =>
        console.error("Failed to load character data: ", error),
      );
  });

  getContainer.appendChild(characterList);
}

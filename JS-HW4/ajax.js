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
    });
  })
  .catch((error) => console.error("Failed to load episodes: ", error));

function displayeEpisodeNames(episode) {
  const getContainer = document.getElementById("container");
  const episodeName = document.createElement("h2");
  episodeName.textContent = `Episode ${episode.episodeId}: ${episode.name}`;
  getContainer.appendChild(episodeName);
}

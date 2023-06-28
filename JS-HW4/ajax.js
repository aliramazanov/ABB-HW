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

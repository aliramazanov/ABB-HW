document.getElementById("loader").addEventListener("click", collectData);

function collectData() {
  const xReq = new XMLHttpRequest();
  xReq.open("GET", "https://ajax.test-danit.com/api/swapi/films", true);

  xReq.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  xReq.send();
}

function collectData() {
  const xReq = new XMLHttpRequest();
  xReq.open("GET", "https://ajax.test-danit.com/api/swapi/films", true);

  /* xReq.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  }; */

  xReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
      document.getElementById("data").innerHTML = this.responseText;
    } else if ((this.status = 404)) {
      document.getElementById("data").innerHTML = "Error 404 - Not Found";
    }
  };

  xReq.send();
}

collectData();

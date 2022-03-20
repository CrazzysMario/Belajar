async function getData(url) {
  url = '../json/' + url;
  try {
    var res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error)
    return null;
  }
}

async function renderStandings() {
  var dataStandings = await getData('standings');

  dataStandings.map((item) => {
    var newTeam = document.createElement("div");
    var standingsList = "";
    newTeam.className = "standings";
    for (secItem in item) {
      if (secItem == "team") {
        var standItem = `<div id="d">${item[secItem]}</div>`;
      } else if (secItem == "win") {
        var standItem = `<div id="a">${item[secItem]}</div>`;
      } else if (secItem == "lose") {
        var standItem = `<div id="c">${item[secItem]}</div>`;
      } else {
        var standItem = `<div>${item[secItem]}</div>`;
      }
      standingsList += standItem;
    }
    newTeam.innerHTML = standingsList;
    document.getElementById("standings-cards").append(newTeam);
  });
}

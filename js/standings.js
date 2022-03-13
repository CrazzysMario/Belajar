var dataStandings = [
  ["Heat", "45", "23", ".662", "-", "29-13", "24-8", "21-15", "8-2", "W1"],
  ["Heat", "45", "23", ".662", "-", "29-13", "24-8", "21-15", "8-2", "W1"],
];

var standItem;
dataStandings.map((item) => {
  var newTeam = document.createElement("div");
  var standingsList = "";
  newTeam.className = "standings";
  item.map((secItem, index) => {
    if(index == 0) {
      standItem = `<div id="d">${secItem}</div>`;
    } else if(index == 1) {
      standItem = `<div id="a">${secItem}</div>`
    } else if(index == 2) {
      standItem = `<div id="c">${secItem}</div>`
    } else {
      standItem = `<div>${secItem}</div>`
    }
    standingsList += standItem;
  });
  newTeam.innerHTML = standingsList;
  document.getElementById("standings-cards").append(newTeam);
});

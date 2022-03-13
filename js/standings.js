var dataStandings = [
  // ["Heat", "45", "23", ".662", "-", "29-13", "24-8", "21-15", "8-2", "W1"],
  // ["Heat", "45", "23", ".662", "-", "29-13", "24-8", "21-15", "8-2", "W1"],
  {
    team: "Heat",
    win: "45",
    lose: "23",
    pct: ".622",
    gb: "-",
    conf: "29-13",
    home: "24-8",
    away: "21-15",
    l10: "8-2",
    strk: "W1",
  },
];

var standItem;
dataStandings.map((item) => {
  var newTeam = document.createElement("div");
  var standingsList = "";
  newTeam.className = "standings";
  for (secItem in item) {
    if (secItem == "team") {
      standItem = `<div id="d">${item[secItem]}</div>`;
    } else if (secItem == "win") {
      standItem = `<div id="a">${item[secItem]}</div>`;
    } else if (secItem == "lose") {
      standItem = `<div id="c">${item[secItem]}</div>`;
    } else {
      standItem = `<div>${item[secItem]}</div>`;
    }
    standingsList += standItem;
  }
  newTeam.innerHTML = standingsList;
  document.getElementById("standings-cards").append(newTeam);
});

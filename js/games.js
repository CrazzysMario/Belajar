async function getData() {
  var url = '../json/games.json';
  try {
    var res = await fetch(url);
    return await res.json();
  } catch(err) {
    console.log(err);
    return null;
  }
}

async function renderGames() {
  var dataGames = await getData();
  
  dataGames.map((item) => {
    let card = document.createElement("div");
    card.className = "card";
    let cardItem1 = document.createElement("div");
    cardItem1.className = "card-item";
    let cardItem2 = document.createElement("div");
    cardItem2.className = "card-item";
    let cardItem3 = document.createElement("div");
    cardItem3.className = "card-item";
    let itemList1 = document.createElement("ul");
    let itemList2 = document.createElement("ul");
    let allGhaza = "";
    item.team.map((team) => {
      let ghaza = `<li>${team}</li>`;
      allGhaza = allGhaza + ghaza;
      itemList1.innerHTML = allGhaza;
    });
    let score = `<li>${item.score}</li>`;
    let date = `<li>${item.date}</li>`;
    itemList2.innerHTML = score + date;
    var image = document.createElement('img')
    cardItem2.append(itemList2);
    cardItem1.append(itemList1);
    cardItem3.append(image)
    image.src = "../img/nba-logo-1.jpeg";
    image.width = 100;
    card.append(cardItem1);
    card.append(cardItem2);
    card.append(cardItem3);
    $("#tab-games .card-container").append(card);
  });
  
  if ($("#tab-games .card").length >= 2) {
    $(".card").css("margin-bottom", "calc(0px - 1px)");
    $(".card").css("margin-right", "calc(0px - 1px)");
  }
  
  if($('#tab-games .card').length % 4 == 0) {
    var newDate = document.createElement('div')
    newDate.className = 'date'
    newDate.innerText = 'Date'
    document.querySelector('#tab-games').appendChild(newDate)
  }
}

renderGames()
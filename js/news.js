var dataBerita = [
  {
    judul: "This is the title of news-1",
    isi: "Its really a testament to the Lakers preposterous level of success that anyone born in the past 50 years or so can only imagine the time before the franchise was one of the NBA’s foremost superpowers. If anyone out there still can’t picture such an era, come Sunday, they’ll be able to see it themselves on television. HBO’s Winning Time: The Rise of the Lakers Dynasty is a proper origin story, not of the Lakers (who were founded in Minneapolis in 1947), but of the Los Angeles Lakers—a distinct entity in spirit and in practice, functionally beginning with the team’s whirlwind 1979-80 season.",
  },
  {
    judul: "This is the title of news-2",
    isi: "Its really a testament to the Lakers preposterous level of success that anyone born in the past 50 years or so can only imagine the time before the franchise was one of the NBA’s foremost superpowers. If anyone out there still can’t picture such an era, come Sunday, they’ll be able to see it themselves on television. HBO’s Winning Time: The Rise of the Lakers Dynasty is a proper origin story, not of the Lakers (who were founded in Minneapolis in 1947), but of the Los Angeles Lakers—a distinct entity in spirit and in practice, functionally beginning with the team’s whirlwind 1979-80 season.",
  },
  {
    judul: "This is the title of news-3",
    isi: "Its really a testament to the Lakers preposterous level of success that anyone born in the past 50 years or so can only imagine the time before the franchise was one of the NBA’s foremost superpowers. If anyone out there still can’t picture such an era, come Sunday, they’ll be able to see it themselves on television. HBO’s Winning Time: The Rise of the Lakers Dynasty is a proper origin story, not of the Lakers (who were founded in Minneapolis in 1947), but of the Los Angeles Lakers—a distinct entity in spirit and in practice, functionally beginning with the team’s whirlwind 1979-80 season.",
  },
];

var elBerita = $("#page-news");

dataBerita.map(function (item) {
  var newContainer = document.createElement("div");
  newContainer.className = "card";
  var cardItem1 = document.createElement("div");
  cardItem1.className = "card-item";
  cardItem1.innerHTML = `<h2>${item.judul}</h2>`;
  var cardItem2 = document.createElement("div");
  cardItem2.className = "card-item";
  cardItem2.innerHTML = `<p>${item.isi}</p>`;

  newContainer.append(cardItem1);
  newContainer.append(cardItem2);
  elBerita.append(newContainer);
});

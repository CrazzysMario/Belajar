async function getData() {
  var url = '../json/news.json';
  try {
    var res = await fetch(url);
    return await res.json()
  } catch(err) {
    console.log(err);
    return null;
  }
}

async function renderNews() {
  var dataNews = await getData();
  var elBerita = $("#page-news");
  
  dataNews.map(function (item) {
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
}

renderNews()
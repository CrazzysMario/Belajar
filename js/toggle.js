var navItem = $(".nav-item");
function toggleTab(tabId) {
  var navItem = $(".nav-item");
  navItem.map((_, el) => {
    if ($(el).data("id") === "menu-" + tabId) {
      $(el).addClass("active");
    } else {
      $(el).removeClass("active");
    }
  });
  $(".page-container").map((_, el) => {
    if ($(el).attr("id") == "tab-" + tabId) {
      $(el).show();
    } else {
      $(el).hide();
    }
  });
}

$('.nav-item').map((item,el) => {
  $(el).click(() => {
    var navID = $(el).data("id").substring(5);
    toggleTab(navID);
  });
}) 


toggleTab("games");

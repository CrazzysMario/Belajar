var navItem = $(".nav-item");
function toggleTab(tabId) {
  var navItem = $(".nav-item");
  navItem.map(function() {
    if ($(this).data("id") === "menu-" + tabId) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  $(".page-container").map(function() {
    if ($(this).attr("id") == "tab-" + tabId) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

$(".nav-item").map(function() {
  $(this).click(() => {
    var navID = $(this).data("id").substring(5);
    toggleTab(navID);
  });
});

toggleTab("games");

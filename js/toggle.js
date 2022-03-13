function toggleTab(tabId) {
  var navItem = $(".nav-item");
  navItem.map(function (i) {
    if ($(this).data("id") === "menu-" + tabId) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".page-container").map(function (item) {
    if ($(this).attr("id") == "tab-" + tabId) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

$(".nav-item").click(function () {
  var navID = $(this).data("id").substring(5);
  toggleTab(navID);
});

toggleTab("games");
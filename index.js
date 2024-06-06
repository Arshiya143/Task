$(document).ready(function () {
  // Function to toggle visibility based on active tab
  function toggleContent(tab, contentToShow, contentToHide) {
    if (tab.hasClass("active")) {
      contentToShow.removeClass("d-none").addClass("d-block");
      contentToHide.removeClass("d-block").addClass("d-none");
    }
  }

  // Initial check for active tab
  toggleContent(
    $("#nav-sharing-tab"),
    $("#containerContent"),
    $("#containerContent1")
  );

  // Click event for sharing tab
  $("#nav-sharing-tab").click(function () {
    toggleContent($(this), $("#containerContent"), $("#containerContent1"));
  });

  // Click event for report tab
  $("#nav-report-tab").click(function () {
    toggleContent($(this), $("#containerContent1"), $("#containerContent"));
  });
});

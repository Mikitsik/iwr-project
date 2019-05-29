$("#getstarted").click(function() {
  $("#loginlay").removeClass("d-none");
  $("#loginlayunder").removeClass("d-none");
});

$("#loginlay").click(function() {
  $(this).addClass("d-none");
  $("#loginlayunder").addClass("d-none");
});

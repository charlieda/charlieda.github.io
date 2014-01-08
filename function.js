$( function() {
  $("[data-action='toggle']").click( function() {
    $( $(this).attr("data-item") ).slideToggle(500);
  });
  $(".collapse").hide();
});
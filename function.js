$( function() {
  $("[data-action='toggle']").click( function() {
    $( $(this).attr("data-item") ).slideToggle(200);
  });
  $(".collapse").hide();
});
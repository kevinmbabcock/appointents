$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var date = $("#date").val();
    var time = $("#timeOfDay").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".date").text(date);
    $(".time").text(time);

    $(".display").show();
  })
})

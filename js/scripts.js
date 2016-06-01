$(document).ready(function() {
  $("#booking").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#clientName").val();
    var addressInput = $("input#clientAddress").val();


    $(".clientName").text(nameInput);
    $(".clientAddress").text(addressInput);

    
    $("#receipt").show();


    });
});

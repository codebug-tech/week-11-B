$(document).ready(function(){
  // Your javascript goes here
  console.log("page is loaded");

  // $("#message-form").submit(function(event){
  //   event.preventDefault();
  //   var form = $("#message-form");
  //   console.log(form);
  // })

  $("#message-form").submit(function(event){
    event.preventDefault();
    var name = $("#input-name").val();
    var message = $("#input-message").val();
    console.log(name);
    console.log(message);
    $("ul").append("<li class='message-box'><span class='name'>" + name + ": </span>" + message + "</li>");
    var msgCount = parseInt($("#message-count").text()) + 1;
    console.log(msgCount);
    $("#message-count").text(msgCount);
    $("#input-name").val("");
    $("#input-message").val("");
  })

});

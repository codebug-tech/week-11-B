$(document).ready(function(){

$("#comment-form").submit(function(event){
  event.preventDefault();
  var name = $("#name").val();
  var commentArea = $("#comment").val();
  console.log(name);
  console.log(commentArea);
})

})
$(document).ready(function(){

  $("#lastName, #firstName").focusin(function(){
     $(this).css("border", "1px solid green");
   });
   $("#lastName, #firstName").focusout(function(){
     $(this).css("border", "1px solid red");
   });
})

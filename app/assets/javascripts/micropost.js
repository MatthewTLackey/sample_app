$(document).ready(function() {
  $("#micropost_content").keyup(function() {
    var count = 140 - $(this).val().length;
    if(count >= 0){
      if(count === 1){
        $("#counter").text(count + " character remaining")
      } else {
        $("#counter").text(count + " characters remaining")
      }
      $("#counter").css("color", "$grayLighter");
    } else if (count < 0) {
      if(count === -1){
        $("#counter").text(count * -1 + " character over the limit")
      } else {
      $("#counter").text(count * -1 + " characters over the limit")
      }
      $("#counter").css("color", "red");
    }
  });
});
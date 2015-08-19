define(function(require){
  var $= require("jquery");
  $("#submit").on("click", function(){
    var newLocation = {
      location: $('#place').val(),
      location_type: $('#type').val(),
      reviews: {
        date: $('#reviewDate').val(),
        title: $('#reviewTitle').val(),
        text: $('#reviewText').val(),
      },
      visited: $('#false').val()
    };

    $.ajax({
      url: "https://nss-trippin.firebaseio.com/trips.json",
      method: "POST",
      data: JSON.stringify(newLocation)
    }).done(function(newData){
      console.log(newData);
    })
    .fail(function(xhr, status, error){
      console.log(error);
    });
  });
});
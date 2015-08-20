define(function(require){
  var $ = require("jquery");

  var newLocation = {
    location: "Moon",
    location_type: "Out-of-this World",
    reviews: {
      date: 0,
      title: "",
      text: ""
    },
    imgurl: "",
    visited: false
  };

  $("#visited").click(function() {
    newLocation.visited = true;
  });

  $("#wish-list").click(function() {
    newLocation.visited = false;
  });

  $("#submit").on("click", function(){
    newLocation.location = $('#place').val();
    newLocation.location_type = $('#type').val();
    newLocation.reviews.date = $('#reviewDate').val();
    newLocation.reviews.title = $('#reviewTitle').val();
    newLocation.reviews.text = $('#reviewText').val();
    newLocation.imgurl = $('#imgurl').val();


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
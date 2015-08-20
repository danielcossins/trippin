define(function(require){
  var $ = require("jquery");

  var selectedTripId;

  $(document).on("click", "button[id^='add-review#']", function(){
    selectedTripId = $(this).attr("id").split('#')[1];
    console.log(selectedTripId);
    $('.review-entry').toggle();
  });
  $(document).on("click", "#submitReview", function(){
    var firebaseRef = new Firebase("https://nss-trippin.firebaseio.com/trips/"+selectedTripId);
    var newReview = {
      date: Date.now(),
      text: $('#reviewText').val(),
      title: $('#reviewTitle').val()
    };

    firebaseRef.child("reviews").push(newReview);
  });
});
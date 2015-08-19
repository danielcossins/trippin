define(function(require){
  var firebase= require("firebase");

  var firebaseRef = new Firebase("https://nss-trippin.firebaseio.com/");
  firebaseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();
    console.log(trips);
  });
});
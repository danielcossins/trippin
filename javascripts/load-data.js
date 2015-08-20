define(function(require){
  var firebase = require("firebase");
  var $ = require("jquery");
  var templates = require("getTemplates");

  var firebaseRef = new Firebase("https://nss-trippin.firebaseio.com/");
  firebaseRef.child("trips").on("value", function(snapshot){
    var trips = snapshot.val();
    console.log(trips);

    var tripsArray=[];
     // Convert Firebase's object of objects into an array of objects
    for (var key in trips) {
      tripsArray[tripsArray.length] = trips[key];
    }
    console.log(tripsArray);

    console.log(templates);

    var visitedTrips = [];
    var wishlistTrips = [];

    for(var i=0; i<tripsArray.length; i++){
      if(tripsArray[i].visited===false){
        wishlistTrips.push(tripsArray[i]);
      }
      else{
        visitedTrips.push(tripsArray[i]);
      }
    }

    console.log(wishlistTrips);
    console.log(visitedTrips);


    var populateTemplate = templates.tripTpl(wishlistTrips);
    $("#list-of-wishlist").html(populateTemplate);

    populateTemplate = templates.tripTpl(visitedTrips);
    $("#list-of-visited").html(populateTemplate);
  });
});
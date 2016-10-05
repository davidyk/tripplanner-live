$(document).ready(function () {

  /* Data model:

  Itinerary = [Day 1, Day 2, Day 3]

  Day 1 = {
    hotel:,
    activity:,
    restaurant
  }

  hotel: []
  restaurant: [restaurant1, restaurant2 ...]
  activity: []


  */

//Initialize
  var itinerary = []
  var emptyDay = {hotel: null, activity: [], restaurant:[]}
  var currentDay = 0;
  itinerary.push(emptyDay);

//Event handling

  $(".hoteladdbtn").on("click", function (){
    // debugger;
    var selectedHotel = $("#hotel-choices option:selected").text();

    itinerary[currentDay].hotel = selectedHotel;

    $(".hotel-list").empty();

    var hotelHtml = "<span class='title' data-type='hotel'>" + itinerary[currentDay].hotel + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button>";

    $(".hotel-list").append(hotelHtml);

  });

  $("#itinerary").on("click", ".remove", function() {
    var removeName = $(this).prev().html();
    // console.log("removeName", removeName);
    var removeType = $(this).prev().attr("data-type");
    console.log("data-type", removeType);

    if(removeType === "hotel") {
      itinerary[currentDay].hotel = null;
      $(this).prev().remove();
      $(this).remove();
      console.log("itinerary[currentDay].hotel", itinerary[currentDay].hotel);
    }
    else if (removeType === "activity") {
      var index = itinerary[currentDay].activity.indexOf(removeName);
      itinerary[currentDay].activity.splice(index, 1);
      $(this).prev().remove();
      $(this).remove();
      console.log("itinerary[currentDay].activity", itinerary[currentDay].activity);
    }
    else if(removeType === "restaurant") {
      var index = itinerary[currentDay].restaurant.indexOf(removeName);
      itinerary[currentDay].restaurant.splice(index, 1);
      $(this).prev().remove();
      $(this).remove();
      console.log("itinerary[currentDay].restaurant", itinerary[currentDay].restaurant);
    }
  });


  $(".restaurantaddbtn").on("click", function (){
    // debugger;
    var selectedRestaurant = $("#restaurant-choices option:selected").text();

    itinerary[currentDay].restaurant.push(selectedRestaurant);

    var restaurantHtml = "<span class='title' data-type='restaurant'>" + selectedRestaurant + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button>";

    $(".restaurant-list").append(restaurantHtml);
    console.log("list of restaurants", itinerary[currentDay].restaurant);
  });

$(".activityaddbtn").on("click", function (){
    // debugger;
    var selectedActivity = $("#activity-choices option:selected").text();

    itinerary[currentDay].activity.push(selectedActivity);

    var activityHtml = "<span class='title' data-type='activity'>" + selectedActivity + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button>";

    $(".activity-list").append(activityHtml);
    console.log("list of activities", itinerary[currentDay].activity);
  });



  $("#day-add").on("click", function (){
    itinerary.push(emptyDay);

    var displayDay = itinerary.length;
    var newDay = "<button class='btn btn-circle day-btn day-number'>" + displayDay + "</button>";
    console.log("newDay", newDay);
    $("#day-add").before(newDay);

    currentDay = itinerary.length;
   });




});

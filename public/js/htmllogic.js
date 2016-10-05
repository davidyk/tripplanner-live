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
  var emptyDay = {hotel: null, activity: null, restaurant:null}
  var currentDay = 0;
  itinerary.push(emptyDay);

//Event handling

  $(".hoteladdbtn").on("click", function (){
    // debugger;
    var selectedHotel = $("#hotel-choices option:selected").text();

    itinerary[currentDay].hotel = selectedHotel;

    $(".hotel-list").empty();

    var hotelHtml = "<span class='title'>" + itinerary[currentDay].hotel + "</span><button class='btn btn-xs btn-danger remove btn-circle'>x</button>";

    $(".hotel-list").append(hotelHtml);

  });

  $("#day-add").on("click", function (){
    itinerary.push(emptyDay);

    var displayDay = itinerary.length;
    var newDay = "<button class='btn btn-circle day-btn day-number'>" + displayDay + "</button>";
    console.log("newDay", newDay);
    $(".day-buttons").append(newDay);

    currentDay = itinerary.length;



   });




});

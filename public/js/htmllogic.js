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
    var selectedHotel = $("#hotel-choices option:selected").text();
    console.log(selectedHotel);

    itinerary[currentDay].hotel = selectedHotel;


    //   .hotel.push(selectedHotel);
    console.log("Hotel in array: ", itinerary[currentDay].hotel);

  // $(".hotel")


  });

});

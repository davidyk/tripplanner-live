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

  var itinerary = []
  var currentDay = 0;

  // var temp = $(".hoteladdbtn");
  // console.log("temp", temp);

  $(".hoteladdbtn").on("click", function (){
    var selectedHotel = $("#hotel-choices option:selected").text()
    console.log(selectedHotel);

    itinerary[currentDay] = {
      hotel: selectedHotel
      }


    //   .hotel.push(selectedHotel);
    // console.log("Hotel in array: ", itinerary[currentDay].hotel[0]);

  });

});

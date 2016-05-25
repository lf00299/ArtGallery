var hotel={
 name: "lawrence",
 rooms: 40,
 booked: 25,
 available:function(){
   return this.rooms - this.booked;
   }
};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;


var elRooms =
document.getElementById('rooms');
elRooms.textContent = hotel.available();

var username;
var message;
username = 'Enrique';

var thename = document.getElementById('name');
thename.textContent = username;

function hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

var canaHotel = new hotel('Punta Cana', 1000, 800);
var jaraHotel = new hotel('Jarabacoa', 30, 8);

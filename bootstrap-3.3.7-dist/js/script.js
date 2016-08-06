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

/*BELOW: Build a function with 3 parameters, calculate each one and create an array inside which stores the calculation, then declare to variables that return the array*/

function getSize(width, height, depth){
  var area = width * height
  var depth = width * height * depth
  var sizes = [area, depth]
}

var areaOne = getSize(3, 2, 6)[0]
var depthOne = getSize(3, 2, 6)[1]

function replaceText(){
  var theText = document.getElementById('getsizes');
  theText.textContent = areaOne;
}

//Create an object with literal notation

var house {
  rooms = 3,
  bathrooms = 2,
  people = 2,

  function bathroomAvailable() {
    return this.bathrooms - this.people;
  }
}

var bAvailable = document.getElementById('bathavailable');
bAvailable.textContent = house.bathroomAvailable();

//Minimal javascript - object example from book

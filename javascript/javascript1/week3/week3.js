//Item array removal
let names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

for (i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
  }
}
console.log(names);

//When will we be there

function getHours(speed, destinationDistance) {
  const hours = destinationDistance / speed;
  function formatTime(hours) {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    console.log(wholeHours + " hours and " + minutes + " minutes");
  }
  formatTime(hours);
}

const travelInformation = {
  speed: 100,
  destinationDistance: 974,
};

getHours(travelInformation.speed, travelInformation.destinationDistance);

// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var pairs = [];
function theBeatlesPlay(musician, instrument){

  var i = 0;
  for(i = 0; i < musician; i++){
    pairs[i] = musician[i] + "plays" + instrument[i];
    i++;
  }
  return pairs;
}

// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musician, instrument){
  var pairs = [];
  var i = 0;
  for(i = 0; i < musicians; i++){
    pairs[i] = musicians[i] + "plays" + instruments[i];
    i++;
  }
  return pairs;
}

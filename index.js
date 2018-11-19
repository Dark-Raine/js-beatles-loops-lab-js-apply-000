// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  const pairs = [];
  for(var i = 0; i < musicians; i++){
    pairs[i] = musicians[i] + "plays" + instruments[i];
    return pairs[i];
  }

}

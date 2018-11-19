// add solution here

var pairs = [];
function theBeatlesPlay(musician, instrument){

  var i;
  for(i = 0; i < musician.length; i++){
    pairs[i] = musician[i] + " plays " + instrument[i];

  }
  return pairs;
}

// add solution here
function theBeatlesPlay(musicians, instruments){
  const pairs = []
  for(var i = 0; i < musicians; i++){
    pairs[i] = musicians[i] + "plays" + instruments[i]
  }
  return pairs
}

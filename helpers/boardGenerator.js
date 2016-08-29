export function boardGenerator () {
  let dice = ["aaafrs","aaeeee","aafirs","adennn","aeeeem","aeegmu","aegmnn","afirsy","bjkqxz","ccenst","ceiilt","ceilpt","ceipst","ddhnot","dhhlor","dhlnor","dhlnor","eiiitt","emottt","ensssu","fiprsy","gorrvw","iprrry","nootuw","ooottus"];
  let matrix = [];
  let letterIndex = 0;
  let counter = dice.length;
  let index = 0;
  let holder = [];

  while(counter--) {
    let letter = "";
    letterIndex = Math.floor(Math.random()*6);
    index = Math.floor(Math.random()*(counter+1));
    letter = dice[index][letterIndex];
    letter.toUpperCase();
    dice.splice(index, 1);

    if(letter === "Q") {
      letter += "u";
    }
    holder.push({
      key: letter
    });
    if(holder.length === 5) {
      matrix.push(holder);
      holder = [];
    }
  }
  return matrix;
}

function charPosition(inputString){
  var outputObject = {};

  for (i = 0; i < inputString.length; i++) {

    var char = inputString[i];
    if(char != ' '){
      if(outputObject.hasOwnProperty(char)){
        outputObject[char].push(i);
      } else {
          outputObject[char] = [i];
      }
    }
  }
  return outputObject;
}

console.log(charPosition(process.argv[2]));




// return all the indices (zero-based positions) in the string where each character is found.
// So for each letter, we're no longer returning just one number to represent its number of occurrences,
// but rather (potentially) multiple numbers to represent all the places in the string that it shows up.
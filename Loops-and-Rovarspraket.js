/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
  if (a === isNaN) {return "No number";}  // better: NaN
  if (a > b) {
  return a;
  } else {
  return b;
  }

}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

 function maxOfThree(a, b, c){
   if (a === isNaN) {return "No number";}
   for (var i = 1; i < 4; i++) {
     var largest = 0;
     if (a > b) {
     largest = a;
     } else {
     largest = b;
     }
     if (largest > c) {
       return largest;
     } else {
       return c;
     }
 }
 }

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

 var vowel = ["a", "e", "i", "o", "u"];
 function isVowel(char){
   var checkForNum = isNaN(char);
   if (!checkForNum) {return false;}
   else {
   var result = false;
   for (var i = 0; i < 5; i++) {
     if (vowel[i] === char.toLowerCase()) {
       result = true;
     }
   }
   return result;
   }
 }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);


//isNaN("37");      // false
//vowels.indexOf(char) > -1

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(input){
  //if input is a number, return the number
  // if (typeof input === "number") {return "number"}  or return Number(text).toString()
  var origString = input
  .split("");
  var newString = "";
  for (var i = 0; i < origString.length; i++) {
    if (origString[i] === isVowel(origString[i])){
      newstring = newstring + origString[i];
    }
    else {
      newString = newString + origString[i] + "o" + origString[i];
    }
    }
  return newString;
}


console.assert(rovarspraket("a") === "a");
console.assert(rovarspraket("b") === "bob");
console.assert(rovarspraket("cat") === "cocatot");
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot");
console.assert(rovarspraket(0) === "0");

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

 function reverse(str){
   var origString = str
   .split("");
   var reverseString = "";
   for (var i = 0; i < origString.length; i++) {
     reverseString = origString[i] + reverseString;
   }
   return reverseString;
 }

 console.assert(reverse("books") === "skoob");
 console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew");


 //in one line
 //function reverse(str) {
//  return str.split('').reverse().join('');
//}

//or do reverse: for (var = i str.length-1, i>=0; i--)

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  var origString = sentence
  .split("");
  var index = 0;
  var longestWord = "";
  for (var i = 0; i < origString.length; i++) {
    if (origString[i] === " ") {
      for var (n = j; n < i; i++) {
        longestWord = longestWord + origString[n];
      }

    }

  }
}

// var longestWord = sentence.split(' ').sort  --> splits into array where space is the split point,
// so it splits into an array of WORDS stored in longestWord
// need to address problem of a word with an apostrophe, because an apostrophe is not a letter
// so use .replace("'","");

//  function findLongestWord(sentence){
//  var longestWord = sentence.replace("'").split(' ').sort
//    (function(a,b)) {
//      return b.length = a.length;
//      });
//        return longestWord(0);
// }


console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

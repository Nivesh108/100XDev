/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let characterCountArray = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for(let i = 0; i < str1.length; i++){
    let char = str1[i];
    if(characterCountArray[char]){
      characterCountArray[char]++;
    }else{
      characterCountArray[char] = 1;
    }
  }
  for(let i = 0; i < str2.length; i++){
    let char = str2[i];
    if(characterCountArray[char]){
      characterCountArray[char]--;
    }else{
      return false;
    }
  }
  return str1.length == str2.length;
}

module.exports = isAnagram;

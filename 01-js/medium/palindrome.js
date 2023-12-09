/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0, end = str.length - 1;
  str = str.toLowerCase();
  while (start < end) {
    if(isSpecialCharacter(str[start])){
      start++;
    }
    else if(isSpecialCharacter(str[end])){
      end--;
    }
    else if(str[start] != str[end]){
      return false;
    }
    else{
      start++;
      end--;
    }
  }
  return true;
}

function isSpecialCharacter(str){
  if(str.charCodeAt() < 48 || (str.charCodeAt() > 57 && str.charCodeAt() < 65)){
    return true;
  }
  return false;
}

module.exports = isPalindrome;

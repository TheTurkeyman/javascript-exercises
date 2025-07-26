const palindromes = function (a) {
 let casefix = a.toLowerCase().replace(/[^a-z0-9]/g, "");
 let reversed = casefix.split('').reverse().join(''); 
return reversed === casefix;
  

};

// Do not edit below this line
module.exports = palindromes;

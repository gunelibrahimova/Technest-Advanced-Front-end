let arrC = []

function intersection(arrA, arrB) {
    if (arrA && arrB) {
        for (let i = 0; i < arrA.length; i++) {
            for (let j = 0; j < arrB.length; j++) {
                if (arrA[i] == arrB[j]) {
                    arrC.push(arrA[i])
                }
            }
        }
        return arrC
    }
}

intersection([2, 3, 4, 5, 6], [3, 4, 6, 7]);

//---------------------------------------


function palindrome(text) {
    let panlindrom = text.split("").reverse().join("")
    if (text.indexOf(' ') >= 0) {
        return false
    }
    return text === panlindrom
}

palindrome("racecar");

//-----------------------------------------


function primeNumber(number) {
    if (number == 1) {
        return "1 nə sadə nə də mürəkkəb ədəddir"
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}

primeNumber(1);

//------------------------------------------

function isPositive(number) {
    if (number < 0) {
        return 0
    }
    return number * number
}

isPositive(6);

//-------------------------------------------

function findFirstNonRepeatedChar(str) {
    const chars = {};
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (chars[char]) {
        chars[char]++;
      } else {
        chars[char] = 1;
      }
    }
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (chars[char] === 1) {
        return char;
      }
    }
    
    return null;
  }

findFirstNonRepeatedChar([2,3,4,2,5,4]); 

  
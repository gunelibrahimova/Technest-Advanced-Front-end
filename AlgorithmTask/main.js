function arraySorting(arr) {
  let even = []
  let odd = []

  for (let i of arr) {
    if (i % 2 == 1) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  even.sort((a, b) => a - b);
  odd.sort((a, b) => a - b);
  return even.concat(odd);
}

arraySorting([1, 4, 26, 4, 7, 9, 13]);

//-----------------------------------------

const denominations = [5, 10, 20, 50, 100, 200, 500];

function dispenseNotes(amount) {
  let notes = [];
  for (let i = denominations.length - 1; i >= 0; i--) {
    while (amount >= denominations[i]) {
      amount -= denominations[i];
      notes.push(denominations[i]);
    }
  }
  return notes;
}

dispenseNotes(1900);


//------------------------------------------

function sortSentence(s) {
  const words = s.split(" ");
  words.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  const sortedWords = words.map((word) => word.replace(/\d/g, ""));
  return sortedWords.join(" ");
}

sortSentence("is2 sentence4 This1 a3");


//--------------------------- 

//35


function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (target < nums[i]) {
      return i;
    }
  }
  return nums.length;
}

searchInsert([1, 3, 5, 6], 8);


//---------------------------------- 

//1909

function increasing(arr) {
  if (arr.length < 2) {
    return true
  }
}

console.log(increasing([1, 3, 6, 4, 2]));

function canBeIncreasing(nums) {
  const n = nums.length;

  if (n < 3) {
    return true;
  }

  for (let i = 0; i < n; i++) {
    const temp = nums[i];
    nums.splice(i, 1);
    let isIncreasing = true;
    for (let j = 1; j < n - 1; j++) {
      if (nums[j] <= nums[j - 1] || nums[j] >= nums[j + 1]) {
        isIncreasing = false;
        break;
      }
    }

    if (isIncreasing) {
      return true;
    }
    nums.splice(i, 0, temp);
  }
  return false;
}

canBeIncreasing([1, 2, 10, 4, 5]);

//------------------------------------

//05.04.2023

var strStr = function (haystack, needle) {
  const index = haystack.indexOf(needle);
  return index >= 0 ? index : -1;
};

strStr("sadbutsad", "sadd");

//------------------------------

function sqrt(x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let result = 0;
  while (result * result <= x) {
    result++;
  }
  return result - 1;
}

sqrt(25);


//---------------------------------

function singleNumber(nums) {
  let count = {};

  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] === undefined) {
      count[nums[i]] = 1;
    } else {
      count[nums[i]] += 1;
    }
  }

  for (let key in count) {
    if (count[key] === 1) {
      return parseInt(key);
    }
  }
}

singleNumber([4, 1, 2, 1, 2]);

//-------------------------------

function isHappy(n) {
  const seen = [];

  function squaredSum(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  while (n !== 1 && !seen.includes(n)) {
    seen.push(n);
    n = squaredSum(n);
  }

  return n === 1;
}

isHappy(20);

//-------------------------------------

String.prototype.insertplus = function () {
  let mid = Math.floor(this.length / 2);
  let result = this.slice(0, mid) + " + " + this.slice(mid);
  return result;
}

"test".insertplus();

//-----------------------

Number.prototype.double = function () {
  return this * 2
}

// (5).double();

//----------------------------

// Array.prototype.push = function(elements){
//   return [...this, elements]
// }
//  arr.push()

// let arr = [1,2,3]
// console.log(arr.push(6));

//------------------------------

//05.05.2023


function add(num) {
  let total = 0;

  function closure() {
    total += num;
    return total;
  }
  return closure;
}


const addFive = add(5);

// console.log(addFive());
// console.log(addFive());
// console.log(addFive());


//------------------------------------


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
}

const rectangle = new Rectangle(4, 5);
// console.log(rectangle.getArea());

//---------------------------------


function People(name, age) {
  this.name = name;
  this.age = age
}

People.prototype.introducing = function () {
  return this.name + " " + this.age
}

const people = new People("Gunel", "21")

// console.log(people.introducing());

//-------------------------------

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  return this.name + " " + "yemek yeyir"
}

const animal = new Animal("Ayı")

// console.log(animal.eat());


//--------------------------

Array.prototype.last = function () {

  if (this.length == 0) {
    return -1
  }
   return this[this.length - 1]
}

// console.log([].last());


//-----------------------------------------


//05.10.23

// var countPoints = function(rings) {
//   let ring = rings.split("")

//   for (let i = 1; i < ring.length; i++) {  
//     if(ring[i] >= 0 && ring[i] <= 9){
//       for (let j = 0; j < ring.length; j++) {
//         if(ring[j] == "R" && ring[j] == "G" && ring[j] == "B"){
//           return "salam"
//         }
//       }
//     }
//   }
// };

// console.log(countPoints("B0R0G0R9R0B0G0"));


const countPoints = function(rings) {
  let rods = new Array(10).fill(0);
  let count = 0;

  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i];
    let rod = parseInt(rings[i + 1]);

    if (rods[rod] === 0) {
      rods[rod] = 1;
    } else if (rods[rod] === 1 && (color === 'R' || color === 'G' || color === 'B')) {
      rods[rod] = 2;
      count++;
    }
  }

  return count;
};

console.log(countPoints("B0R0G0R9R0B0G0")); 

//-----------------------------------

const sumOddLengthSubarrays = function(arr) {
  let sum = 0;

  for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end += 2) {
      for (let i = start; i <= end; i++) {
        sum += arr[i];
      }
    }
  }

  return sum;
};

console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3])); 







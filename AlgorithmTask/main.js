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
        } 
        else if (target < nums[i]) {
            return i;
        }
    }
    return nums.length;
}

searchInsert([1, 3, 5, 6], 8);


//---------------------------------- 

//1909

function increasing(arr){
    if(arr.length < 2){
        return true
    }
}

console.log(increasing([1,3,6,4,2]));

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

  console.log(canBeIncreasing([1,2,10,4,5]));

  




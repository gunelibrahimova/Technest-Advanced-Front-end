function linearSearch(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return i;
        }
    }
    return -1;
}

linearSearch([2, 4, 1, 7, 9, 5], 2); 

//--------------------------


function binarySearch(arr, number) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end && arr[mid] != number) {
        if (number <= arr[mid]) {
            end = mid - 1;
        } else if (number >= arr[mid]) {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return arr[mid] !== number ? -1 : mid;
}

 console.log(binarySearch([0, 1, 2, 3, 4, 5, 7, 8, 9], 1)); 

//---------------------------------

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}
bubbleSort([2, 4, 1, 7, 9, 5]);

//-------------------------------------

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        let minIndex = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex != i){
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

selectionSort([2, 4, 1, 9, 7, 5]);

//----------------------------------------

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }

insertionSort([2, 4, 1, 9, 7, 5]);

//-------------------------------------------


function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

mergeSort([2, 4, 1, 9, 7, 5]);

//-----------------------------------------


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
      return;
    }
  
    const pivot = arr[Math.floor((left + right) / 2)];
    const index = partition(arr, left, right, pivot);
  
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
  
    return arr;
  }
  
  function partition(arr, left, right, pivot) {
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
  
      while (arr[right] > pivot) {
        right--;
      }
  
      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
  
    return left;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

quickSort([2, 4, 1, 9, 7, 5]);


  
  
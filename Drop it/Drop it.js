function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift(); // Remove the first element
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
function frankenSplice(arr1, arr2, n) {
    let copiedArray = arr2.slice(); 
    copiedArray.splice(n, 0, ...arr1); 
    return copiedArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
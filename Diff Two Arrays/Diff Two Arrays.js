function diffArray(arr1, arr2) {
    const newArr = [];
  
    // Helper function to check if an element is present in an array
    function isInArray(element, array) {
      return array.indexOf(element) !== -1;
    }
  
    // Check elements in arr1 that are not in arr2
    for (let i = 0; i < arr1.length; i++) {
      if (!isInArray(arr1[i], arr2)) {
        newArr.push(arr1[i]);
      }
    }
  
    // Check elements in arr2 that are not in arr1
    for (let i = 0; i < arr2.length; i++) {
      if (!isInArray(arr2[i], arr1)) {
        newArr.push(arr2[i]);
      }
    }
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
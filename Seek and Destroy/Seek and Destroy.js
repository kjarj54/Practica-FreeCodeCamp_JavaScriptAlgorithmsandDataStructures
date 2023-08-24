function destroyer(arr) {
    const valuesToRemove = Array.from(arguments).slice(1);
  
    // Use the filter method to create a new array with elements not in valuesToRemove
    return arr.filter(element => !valuesToRemove.includes(element));
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
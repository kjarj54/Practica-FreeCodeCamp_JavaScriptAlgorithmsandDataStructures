function uniteUnique(...arrays) {
    const result = [];
    
    arrays.forEach(array => {
      array.forEach(item => {
        if (!result.includes(item)) {
          result.push(item);
        }
      });
    });
  
    return result;
  }
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
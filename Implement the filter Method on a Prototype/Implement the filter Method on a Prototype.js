Array.prototype.myFilter = function(callback) {
    const newArray = [];
    
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
    
    return newArray;
  };
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const evenNumbers = numbers.myFilter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
  
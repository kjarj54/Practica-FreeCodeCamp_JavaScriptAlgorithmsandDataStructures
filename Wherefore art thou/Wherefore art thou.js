function whatIsInAName(collection, source) {
    return collection.filter(obj => {
      // Use the every method to check if all name-value pairs in source are present in obj
      return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
    });
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
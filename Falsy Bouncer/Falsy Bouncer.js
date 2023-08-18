function bouncer(arr) {
    let filteredArray = arr.filter(value => Boolean(value));
    return filteredArray;
  
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
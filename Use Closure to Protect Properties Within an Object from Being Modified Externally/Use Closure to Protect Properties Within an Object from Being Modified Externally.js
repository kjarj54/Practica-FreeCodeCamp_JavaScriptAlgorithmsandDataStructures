function Bird() {
    let weight = 15; // Declare weight as a private variable
  
    this.getWeight = function() {
      return weight;
    };
  }
  
  let ducky = new Bird();
  console.log(ducky.getWeight()); // Output: 15
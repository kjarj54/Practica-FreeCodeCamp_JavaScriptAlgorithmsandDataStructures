function truthCheck(collection, pre) {
    // Iterate through the collection array
    for (let i = 0; i < collection.length; i++) {
      // Check if the specified property is truthy for the current object
      if (!collection[i][pre]) {
        return false; // If any object fails the check, return false
      }
    }
    
    return true; // If all objects pass the check, return true
  }
  
  truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
function addTogether() {
    // Check if all arguments are valid numbers
    function isValidNumber(num) {
      return typeof num === "number";
    }
  
    if (arguments.length === 2 && isValidNumber(arguments[0]) && isValidNumber(arguments[1])) {
      // If two valid arguments are provided, return their sum
      return arguments[0] + arguments[1];
    } else if (arguments.length === 1 && isValidNumber(arguments[0])) {
      // If only one valid argument is provided, return a function that expects another argument
      const firstArg = arguments[0];
      return function(secondArg) {
        if (isValidNumber(secondArg)) {
          return firstArg + secondArg;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined; // Return undefined if arguments are not valid
    }
  }
  
  addTogether(2,3);
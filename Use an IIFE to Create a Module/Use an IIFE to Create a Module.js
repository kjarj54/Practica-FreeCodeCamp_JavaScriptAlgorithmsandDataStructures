let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();
  
  
  let someObject = {};
  funModule.isCuteMixin(someObject);
  console.log(someObject.isCute()); // Output: true
  
  funModule.singMixin(someObject);
  someObject.sing(); // Output: Singing to an awesome tune
  
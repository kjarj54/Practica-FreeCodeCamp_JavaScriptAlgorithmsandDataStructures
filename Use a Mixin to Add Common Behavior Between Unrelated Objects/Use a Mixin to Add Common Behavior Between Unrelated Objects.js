let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding through the air or water!");
    };
  };
  
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide(); // Output: Gliding through the air or water!
  boat.glide(); // Output: Gliding through the air or water!
  
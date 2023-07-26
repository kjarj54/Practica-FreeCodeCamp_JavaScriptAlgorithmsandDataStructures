const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    // Only change code above this line
    for (let i = 0; i < arr.length; i++) {
      const listItem = `<li class="text-warning">${arr[i]}</li>`;
      failureItems.push(listItem);
    }
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
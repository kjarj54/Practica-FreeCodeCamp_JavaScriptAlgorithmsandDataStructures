// Only change code below this line
function urlSlug(title) {

    const wordsArray = title.toLowerCase().trim().split(/\s+/);
  
    // Join the array of words with hyphens and return the result
    return wordsArray.join("-");
  }
  // Only change code above this line
  urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
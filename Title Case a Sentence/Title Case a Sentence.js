function titleCase(str) {
    const words = str.toLowerCase().split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');
  }
  
  titleCase("I'm a little tea pot");
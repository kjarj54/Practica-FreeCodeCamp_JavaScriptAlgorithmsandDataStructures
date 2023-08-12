function findLongestWordLength(str) {
  let cont = 0;
  let mayor = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      cont += 1;
      if (cont > mayor) {
        mayor = cont;
      }
    } else {
      cont = 0;
    }
  }
  return mayor;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
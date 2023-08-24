// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  const newBookList = [...bookList]; // Create a new array by spreading the bookList
  newBookList.push(bookName); // Add the bookName to the new array
  return newBookList; // Return the new array
}


// Change code below this line
function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {
    const newBookList = [...bookList]; // Create a new array by spreading the bookList
    newBookList.splice(book_index, 1); // Remove the bookName from the new array
    return newBookList; // Return the new array
  }
}
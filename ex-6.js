let favoriteBooks = [];
const word = 'Beauty';

function addFavoriteBook(bookName) {
  if (bookName.includes(word)) {
    favoriteBooks.push(bookName)
    bookName
  } 
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);

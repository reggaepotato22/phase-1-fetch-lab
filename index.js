function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json()) // Convert response to JSON
      .then(data => renderBooks(data)) // Pass the data to renderBooks
      .catch(error => console.error('Error fetching books:', error));
}

function renderBooks(books) {
  const booksList = document.getElementById('books'); // Assuming there's an element with id "books"

  books.forEach(book => {
      const li = document.createElement('li');
      li.textContent = book.name; // Use book.name to get the title
      booksList.appendChild(li);
  });
}

// Call fetchBooks when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);

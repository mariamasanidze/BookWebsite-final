import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
      <div class="flex justify-center mt-6">
  <button id='load-more' class="px-6 py-3 bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100">
    Load More
  </button>
</div>

    </section>
  )
}
// // Mock data for books
// const books = Array.from({ length: 100 }, (_, i) => `Book ${i + 1}`);

// // State variables
// let booksPerPage = 20; // Number of books to load per click
// let currentPage = 0;   // Tracks the current page

// // Function to load books
// function loadBooks() {
//     const bookList = document.getElementById('book-list');
//     const startIndex = currentPage * booksPerPage;
//     const endIndex = startIndex + booksPerPage;

//     // Get the next set of books
//     const booksToLoad = books.slice(startIndex, endIndex);

//     // Append books to the list
//     booksToLoad.forEach(book => {
//         const bookItem = document.createElement('div');
//         bookItem.textContent = book;
//         bookList.appendChild(bookItem);
//     });

//     // Update page
//     currentPage++;

//     // Hide the button if no more books are left to load
//     if (currentPage * booksPerPage >= books.length) {
//         document.getElementById('load-more').style.display = 'none';
//     }
// }

// // Add click event to the Load More button
// document.getElementById('load-more').addEventListener('click', loadBooks);

// // Initial load
// loadBooks();


export default BookList


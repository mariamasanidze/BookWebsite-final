// import React from 'react';
// import { useGlobalContext } from '../../context';
// import Book from "../BookList/Book";
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";

// //https://covers.openlibrary.org/b/id/240727-S.jpg

// const BookList = () => {
//   const {books, loading, resultTitle} = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // removing /works/ to get only id
//       id: (singleBook.id).replace("/works/", ""),
//       cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
//     }
//   });

//   if(loading) return <Loading />;

//   return (
//     <section className='booklist'>
//       <div className='container'>
//         <div className='section-title'>
//           <h2>{resultTitle}</h2>
//         </div>
//         <div className='booklist-content grid'>
//           {
//             booksWithCovers.slice(0, 30).map((item, index) => {
//               return (
//                 <Book key = {index} {...item} />
//               )
//             })
//           }
//         </div>
//       </div>
//       <div class="flex justify-center mt-6">
//   <button  class="px-6 py-3 bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100">
//     Load More
//   </button>
// </div>

//     </section>
//   )
// }

// export default BookList

import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const [visibleBooks, setVisibleBooks] = useState(20); // Start with 20 books

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg
    };
  });

  const loadMoreBooks = () => {
    setVisibleBooks((prev) => prev + 20); // Increase the visible books count by 20
  };

  if (loading) return <Loading />;

  return (
    <section className="booklist">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {
            booksWithCovers.slice(0, visibleBooks).map((item, index) => (
              <Book key={index} {...item} />
            ))
          }
        </div>
        {visibleBooks < books.length && ( // Show the button only if there are more books to load
          <div className="flex justify-center mt-6">
            <button
              onClick={loadMoreBooks}
              className="px-6 py-3 bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookList;

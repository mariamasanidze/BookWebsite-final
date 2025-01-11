

import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const [visibleBooks, setVisibleBooks] = useState(20); 

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
    setVisibleBooks((prev) => prev + 20); 
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
        {visibleBooks < books.length && ( 
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

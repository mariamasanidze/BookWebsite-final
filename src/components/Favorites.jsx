import React from 'react';
import { useGlobalContext } from '../../context.';
import "./Favorites.css";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useGlobalContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <h2>Your Favorites List is Empty</h2>
        <p>Add some books to your favorites!</p>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h2>Your Favorite Books</h2>
      <div className="favorites-list">
        {favorites.map((book) => (
          <div key={book.id} className="favorite-item">
            <img src={book.cover_img} alt="Book cover" />
            <div className="favorite-details">
              <h3>{book.title}</h3>
              <p>Author: {book.author.join(", ")}</p>
              <p>First Published: {book.first_publish_year}</p>
              <button
                className="btn btn-danger"
                onClick={() => removeFromFavorites(book.id)}
              >
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

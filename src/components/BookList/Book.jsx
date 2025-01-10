import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

// Function to generate a random price
const getRandomPrice = () => {
  return (Math.random() * (50 - 10) + 10).toFixed(2); // Generates a price between $10 and $50
};

const Book = (book) => {
  const price = getRandomPrice(); // Generate a random price for each book

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={book.cover_img} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/home/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        {/* Price section */}
        <div className='book-item-info-item price fs-15'>
          <span className='price-label'>Price: </span>
          <span className='price-amount'>${price}</span>
        </div>
        <Link to={`/home/book/${book.id}`} {...book}>
        <button class="px-6 py-3 bg-white text-gray-800 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100">
    More Details
  </button>
  </Link>
      </div>
    </div>
    
  );
};

export default Book;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useGlobalContext } from '../../context'; // Import the context for favorites
// import "./BookList.css";

// // Function to generate a random price
// const getRandomPrice = () => {
//   return (Math.random() * (50 - 10) + 10).toFixed(2); // Generates a price between $10 and $50
// };

// const Book = (book) => {
//   const price = getRandomPrice(); // Generate a random price for each book
//   const { addToFavorites } = useGlobalContext(); // Access the addToFavorites function from context

//   return (
//     <div className='book-item flex flex-column flex-sb'>
//       <div className='book-item-img'>
//         <img src={book.cover_img} alt="cover" />
//       </div>
//       <div className='book-item-info text-center'>
//         <Link to={`/book/${book.id}`} {...book}>
//           <div className='book-item-info-item title fw-7 fs-18'>
//             <span>{book.title}</span>
//           </div>
//         </Link>

//         <div className='book-item-info-item author fs-15'>
//           <span className='text-capitalize fw-7'>Author: </span>
//           <span>{book.author.join(", ")}</span>
//         </div>

//         <div className='book-item-info-item publish-year fs-15'>
//           <span className='text-capitalize fw-7'>First Publish Year: </span>
//           <span>{book.first_publish_year}</span>
//         </div>

//         {/* Price section */}
//         <div className='book-item-info-item price fs-15'>
//           <span className='price-label'>Price: </span>
//           <span className='price-amount'>${price}</span>
//         </div>

//         {/* Add to Favorites button */}
//         <button
//           className='btn btn-primary add-to-favorites-btn'
//           onClick={() => addToFavorites({ ...book, price })}
//         >
//           Add to Favorites
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Book;

// import React, {useState, useEffect} from 'react';
// import { useParams } from 'react-router-dom';
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookDetails.css";
// import {FaArrowLeft} from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';

// const URL = "https://openlibrary.org/works/";
// const BookDetails = () => {
//   const {id} = useParams();
//   const [loading, setLoading] = useState(false);
//   const [book, setBook] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setLoading(true);
//     async function getBookDetails() {
//       try {
//         const response = await fetch(`${URL}${id}.json`);
//         const data = await response.json();
//         console.log(data);
  
//         if (data) {
//           const { description, title, covers, subject_places, subject_times, subjects } = data;
  
//           // Add a dummy price
//           const newBook = {
//             description: description ? description.value : "No description found",
//             title: title,
//             cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
//             subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
//             subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
//             subjects: subjects ? subjects.join(", ") : "No subjects found",
//             price: `${(Math.random() * 100).toFixed(2)}` // Generate a random price
//           };
//           setBook(newBook);
//         } else {
//           setBook(null);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     }
//     getBookDetails();
//   }, [id]);


//   if(loading) return <Loading />;

//   return (
//     <section className='book-details'>
//       <div className='container'>
//         <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/home/book")}>
//           <FaArrowLeft size = {22} />
//           <span className='fs-18 fw-6'>Go Back</span>
//         </button>

//         <div className='book-details-content grid'>
//           <div className='book-details-img'>
//             <img src = {book?.cover_img} alt = "cover img" />
//           </div>
//           <div className='book-details-info'>
//             <div className='book-details-item title'>
//               <span className='fw-6 fs-24'>{book?.title}</span>
//             </div>
//             <div className='book-details-item description'>
//               <span>{book?.description}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Places: </span>
//               <span className='text-italic'>{book?.subject_places}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subject Times: </span>
//               <span className='text-italic'>{book?.subject_times}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Subjects: </span>
//               <span>{book?.subjects}</span>
//             </div>
//             <div className='book-details-item'>
//               <span className='fw-6'>Price: </span>
//               <span className='price'>${book?.price}</span>
//             </div>
//             <button class="px-14 py-4 mt-5 font-semibold text-black bg-[rgb(198,174,160)] rounded-xl hover:bg-[#6c5232]"> Add to Favorites </button>
//             {/* <button
//   className="px-14 py-4 mt-5 font-semibold text-black bg-[rgb(198,174,160)] rounded-xl hover:bg-[#6c5232]"
//   onClick={handleAddToFavorites}
// >
//   Add to Favorites
// </button> */}

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BookDetails

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context'; // Import context
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookDetails.css';
import { FaArrowLeft } from 'react-icons/fa';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails() {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const { description, title, covers, subject_places, subject_times, subjects } = data;

          const newBook = {
            id, // Use the ID from params
            description: description
              ? typeof description === 'string'
                ? description
                : description.value
              : "No description found",
            title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times: subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
            price: `$${(Math.random() * 50 + 10).toFixed(2)}`, // Generate a random price between $10 and $60
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="book-details">
      <div className="container">
        {/* Go Back Button */}
        <button type="button" className="flex flex-c back-btn" onClick={() => navigate('/home/book')}>
          <FaArrowLeft size={22} />
          <span className="fs-18 fw-6">Go Back</span>
        </button>

        {/* Book Details */}
        <div className="book-details-content grid">
          <div className="book-details-img">
            <img src={book?.cover_img} alt="cover img" />
          </div>
          <div className="book-details-info">
            {/* Title */}
            <div className="book-details-item title">
              <span className="fw-6 fs-24">{book?.title}</span>
            </div>

            {/* Description */}
            <div className="book-details-item description">
              <p>{book?.description}</p>
            </div>

            {/* Price */}
            <div className="book-details-item price">
              <span className="fw-6 fs-20">Price: </span>
              <span className="text-green-600 fw-7 fs-22">{book?.price}</span>
            </div>

            

            {/* Navigate to Favorites Page Button */}
            <button
              className="px-14 py-4 mt-5 font-semibold text-white bg-blue-500 rounded-xl hover:bg-blue-700"
              onClick={() => navigate('/favorites')}
            >
              Go to Favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;

import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};


//favorites page


// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [books, setBooks] = useState([]); // Example state for books
//   const [loading, setLoading] = useState(false);
//   const [resultTitle, setResultTitle] = useState('');
//   const [favorites, setFavorites] = useState([]); // Favorites state

//   // Function to add a book to favorites
//   const addToFavorites = (book) => {
//     setFavorites((prevFavorites) => {
//       if (!prevFavorites.some((fav) => fav.id === book.id)) {
//         return [...prevFavorites, book]; // Add if not already in favorites
//       }
//       return prevFavorites;
//     });
//   };

//   // Function to remove a book from favorites
//   const removeFromFavorites = (bookId) => {
//     setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.id !== bookId));
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         books,
//         loading,
//         resultTitle,
//         favorites,
//         addToFavorites,
//         removeFromFavorites,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Hook to use the global context
// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider };

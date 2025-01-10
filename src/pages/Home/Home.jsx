import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
    </main>
  )
}

export default Home

// import React from 'react';
// import Header from '../../components/Header/Header';
// import Navbar from '../../components/Navbar/Navbar';
// // import SearchForm from '../../components/SearchForm/SearchForm';
// import BookList from '../../components/BookList/BookList';

// const Home = () => {
//   return (
//     <main>
//       <Navbar />
//       <Header />
//       {/* <SearchForm /> */}
//       <BookList />
//     </main>
//   );
// };

// export default Home;


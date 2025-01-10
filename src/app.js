// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Login";

// const MainPage = () => <h1>Welcome to the Main Page</h1>;

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/main" element={<MainPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BookList from './components/BookList/BookList';
// import Favorites from './components/Favorites/Favorites';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BookList />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login"; // Assuming Login is in the components folder
// import MainPage from "./components/MainPage"; // A new component you'll create for the main page
// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<MainPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Login from './Login';
// import Home from './pages/Home';
// import About from './pages/About';
// import BookDetails from './components/BookDetails/BookDetails';
// import { useState } from 'react';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
//         {loggedIn && (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/book/:id" element={<BookDetails />} />
//           </>
//         )}
//       </Routes>
//     </div>
//   );
// }

// export default App;

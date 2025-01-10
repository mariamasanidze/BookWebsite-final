
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Ensure Navigate is imported
import { AppProvider } from './context'; // Make sure this file exists and is correctly named
import './index.css'; // Ensure this CSS file exists
import Home from './pages/Home/Home'; // Verify the path
import About from "./pages/About/About"; // Verify the path
import BookList from "./components/BookList/BookList"; // Verify the path
import BookDetails from "./components/BookDetails/BookDetails"; // Verify the path
import Login from './Login'; // Verify the path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
    <Routes>
  {/* Redirect root to login */}
  <Route path="/" element={<Navigate to="/login" replace />} />
  
  {/* Login Route */}
  <Route path="/login" element={<Login />} />
  
  {/* Home Route */}
  <Route path="/home" element={<Home />}>
    <Route path="about" element={<About />} />
    <Route path="book" element={<BookList/>} />
    {/* Remove leading / from nested route */}
    <Route path="book/:id" element={<BookDetails/>} />
  </Route>
</Routes>

    </BrowserRouter>
  </AppProvider>
);

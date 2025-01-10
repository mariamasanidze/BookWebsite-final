import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>“You can never tell a book by its cover, but you can tell a lot by its first few pages. A good book introduces itself, leads you in gently, takes your hand, and whispers to you that you are about to be taken on a journey—sometimes wild, sometimes soothing, but always worth the trip.”</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header